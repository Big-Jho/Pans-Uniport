// likeHelpers.js
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

// Like-only toggle system
export async function toggleLike(slug) {
  try {
    const user = auth.currentUser;
    if (!user) return { success: false, error: "User missing" };

    const postRef = doc(db, "posts", slug);
    const reactionRef = doc(db, "posts", slug, "reactions", user.uid);

    await runTransaction(db, async (transaction) => {
      // READ data
      const postSnap = await transaction.get(postRef);
      const reactionSnap = await transaction.get(reactionRef);

      let likes = 0;

      if (postSnap.exists()) {
        likes = postSnap.data().likes || 0;
      }

      const hasLiked =
        reactionSnap.exists() && reactionSnap.data().type === "like";

      if (hasLiked) {
        // UNLIKE
        likes -= 1;
        transaction.delete(reactionRef);
      } else {
        // LIKE
        likes += 1;
        transaction.set(reactionRef, { type: "like" });
      }

      // Save updated like count
      transaction.set(postRef, { likes }, { merge: true });
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
