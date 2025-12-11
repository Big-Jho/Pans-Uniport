import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { db, auth } from "../../firebase";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { ensureUser, toggleLike } from "../../likeHelpers";

import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import interviews from "../data/interviews";

import { ReactComponent as HeartIcon } from "../../assets/images/heart-regular-full.svg";

function InterviewsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const url = window.location.href;

  const navigate = useNavigate();
  const { slug } = useParams();

  const [firebasePost, setFirebasePost] = useState(null);
  const [userReaction, setUserReaction] = useState(null);

  const interview = interviews.find((p) => p.slug === slug);

  const localPost = interview; // content always comes from your static JSON
  const firestoreData = firebasePost || { likes: 0, dislikes: 0 };

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
            <div className="space-y-3 mb-8">
              <h2 className="text-center font-bold small-header text-ash/60">
                interview
              </h2>

              <h2 className="text-center text-2xl font-light md:text-3xl tracking-wider">
                Interview Session With{" "}
                <span className="font-semibold">{interview.name}</span>
              </h2>
              <p className="text-ash/60  text-center">{interview.role}</p>
              <p className="text-ash/60 text-center">{interview.date}</p>

              <div className="h-0.5 w-12 bg-ash/60 mx-auto"></div>
            </div>

            {/* BLOG CONTENT */}
            <div className="max-w-4xl mx-auto px-4 py-10">
              {/* Header */}

              {/* Hero Image */}
              <img
                src={interview.coverImage}
                alt={interview.name}
                className="w-full h-72 md:h-96 object-cover rounded-md shadow"
              />

              {/* Intro */}
              <p className="mt-4 text-base text-center text-ash/60">
                {interview.intro}
              </p>

              {/* Q/A Sections */}
              <div className="mt-10 space-y-10">
                {interview.body.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-left text-xl font-light md:text-2xl pt-8 pb-3 tracking-wide">
                      {item.question}
                    </h4>
                    <p className="text-ash/60  whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* LIKE / DISLIKE */}
      <section className={`border-t border-gray`}>
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 my-10">
            <span className="text-xl text-ash">Like & Share</span>
            <div className="flex justify-center items-center gap-4 md:gap-8">
              <button
                onClick={() => handleReact("like")}
                className={`text-xl transition flex flex-row justify-center items-center hover:text-ash text-ash/60 group ${
                  userReaction === "like" ? "text-green-600" : "text-gray-700"
                }`}
              >
                <HeartIcon className="w-6 h-6 md:w-7 md:h-7 pt-0 opacity-60 group-hover:opacity-100 mr-1 inline" />

                {firestoreData.likes ?? 0}
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2  rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="xl"
                  className="hover:text-ash text-ash/60 transition"
                />
              </a>

              {/* Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 text-black rounded-lg "
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="xl"
                  className="transition hover:text-ash text-ash/60"
                />
              </a>

              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="xl"
                  className="transition hover:text-ash text-ash/60"
                />
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="black"
                  size="xl"
                  className="transition hover:text-ash text-ash/60"
                />
              </a>

              {/* Copy Link */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  alert("Link copied!");
                }}
                className="py-2 rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faCopy}
                  size="lg"
                  className="transition hover:text-ash text-ash/60"
                />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export default InterviewsPage;
