import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { db, auth } from "../../firebase";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { ensureUser, reactToPost } from "../../likeHelpers";

import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import drugSpotlightPosts from "../data/drugSpotlightPosts";
import writers from "../data/writers.json";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function CreativityPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [firebasePost, setFirebasePost] = useState(null);
  const [userReaction, setUserReaction] = useState(null);

  const localPost = drugSpotlightPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Ensure Firebase anonymous user exists
  useEffect(() => {
    ensureUser();
  }, []);

  // Firestore live listener for real-time likes/dislikes
  useEffect(() => {
    const postRef = doc(db, "posts", slug);

    const unsub = onSnapshot(postRef, (snap) => {
      if (snap.exists()) {
        setFirebasePost(snap.data());
      } else {
        setFirebasePost(null); // no document (new post)
      }
    });

    return () => unsub();
  }, [slug]);

  // Fetch user reaction if it exists
  useEffect(() => {
    async function fetchReaction() {
      const user = auth.currentUser;
      if (!user) return;

      const reactionRef = doc(db, "posts", slug, "reactions", user.uid);
      const snap = await getDoc(reactionRef);

      if (snap.exists()) setUserReaction(snap.data().type);
    }

    fetchReaction();
  }, [slug]);

  if (!localPost) {
    return navigate("/not-found");
  }

  const post = localPost; // content always comes from your static JSON
  const firestoreData = firebasePost || { likes: 0, dislikes: 0 };

  const handleReact = async (type) => {
    const res = await toggleLike(slug);
    if (res.success) setUserReaction(type);
    else alert("Error: " + res.error);
  };

  return (
    <main>
      <NavCombo navColor="white" />
      <section>
        <Container className="pt-24 md:pt-28 lg:pt-40">
          <div className="w-full xl:max-w-2xl mx-auto">
            <div className="space-y-4 mb-8">
              <h2 className="text-center font-bold small-header text-ash/60">
                {post.category}
              </h2>

              <h2 className="text-center text-2xl font-light md:text-3xl tracking-wider">
                {post.title}
              </h2>

              {post.author && (
                <p className="text-ash/60 text-center">
                  By{" "}
                  <span className="text-black">
                    {writers[post.author.id - 1]?.name}
                  </span>{" "}
                  on {post.date}
                </p>
              )}

              <div className="h-0.5 w-12 bg-ash/60 mx-auto"></div>
            </div>

            {/* BLOG CONTENT */}
            <div
              className={`${
                post.category === "poem" ? "space-y-0.5" : "space-y-2"
              }`}
            >
              {post.content?.map((content, index) => {
                if (content.element === "ol") {
                  return (
                    <ol key={index} className={content.class}>
                      {content.innerContent.map((li, i) => (
                        <li key={i} className={li.class}>
                          {li.text}
                        </li>
                      ))}
                    </ol>
                  );
                }

                if (content.element === "img") {
                  return (
                    <img
                      key={index}
                      className={content.class}
                      src={content.imageUrl}
                      alt={content.alt}
                    />
                  );
                }

                const Tag = content.element;
                return (
                  <Tag key={index} className={content.class}>
                    {content.innerContent}
                  </Tag>
                );
              })}
            </div>

            {/* LIKE / DISLIKE */}
            <div className="flex justify-center gap-6 my-10">
              <button
                onClick={() => handleReact("like")}
                className={`text-lg transition ${
                  userReaction === "like" ? "text-green-600" : "text-gray-700"
                }`}
              >
                <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                {firestoreData.likes ?? 0}
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export default CreativityPage;
