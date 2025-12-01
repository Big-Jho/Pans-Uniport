import { db, auth } from "./firebase";
import { doc, runTransaction } from "firebase/firestore";

// Ensure anonymous user exists
export function ensureUser() {
  return new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      unsub();
      if (user) return resolve(user);
      try {
        const newUser = await auth.signInAnonymously();
        resolve(newUser.user);
      } catch (err) {
        reject(err);
      }
    });
  });
}

export async function reactToPost(slug, type) {
  try {
    const user = auth.currentUser;
    if (!user) return { success: false, error: "User missing" };

    const postRef = doc(db, "posts", slug);
    const reactionRef = doc(db, "posts", slug, "reactions", user.uid);

    await runTransaction(db, async (transaction) => {
      // READS MUST COME FIRST
      const postSnap = await transaction.get(postRef);
      const reactionSnap = await transaction.get(reactionRef);

      let likes = 0;
      let dislikes = 0;

      if (postSnap.exists()) {
        likes = postSnap.data().likes || 0;
        dislikes = postSnap.data().dislikes || 0;
      }

      let previous = null;
      if (reactionSnap.exists()) {
        previous = reactionSnap.data().type; // "like" | "dislike"
      }

      // HANDLE LOGIC
      if (type === "like") {
        if (previous === "like") {
          // remove like
          likes -= 1;
          transaction.delete(reactionRef);
        } else {
          // switching from dislike to like
          if (previous === "dislike") dislikes -= 1;

          likes += 1;
          transaction.set(reactionRef, { type: "like" });
        }
      }

      if (type === "dislike") {
        if (previous === "dislike") {
          // remove dislike
          dislikes -= 1;
          transaction.delete(reactionRef);
        } else {
          // switching from like to dislike
          if (previous === "like") likes -= 1;

          dislikes += 1;
          transaction.set(reactionRef, { type: "dislike" });
        }
      }

      // WRITE UPDATED COUNTS
      transaction.set(postRef, { likes, dislikes }, { merge: true });
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
