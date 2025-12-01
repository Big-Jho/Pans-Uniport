import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { db, auth } from "../firebase";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { ensureUser, reactToPost } from "../likeHelpers";

import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import Container from "../shared/Container";

import blogPosts from "../data/blogPosts";
import writers from "../data/writers.json";

function BlogPage() {
  // const [post, setPost] = useState(null);
  const [userReaction, setUserReaction] = useState(null);
  const [loading, setLoading] = useState(true);

  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  const navigate = useNavigate();

  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    navigate("/not-found");
  }

  console.log(writers[post.author.id - 1].name);

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
              <h2 className="text-center text-2xl font-light md:text-3xl  tracking-wider">
                {post.title}
              </h2>
              <p className="text-ash/60 text-center">
                By{" "}
                <span className="text-black">
                  {writers[post.author.id - 1].name}
                </span>{" "}
                on {post.date}
              </p>
              <div className="h-0.5 w-12 bg-ash/60 mx-auto"></div>
            </div>
            <div className="space-y-2">
              {post.content.map((content) => {
                if (content.element === "ol") {
                  return (
                    <content.element className={content.class}>
                      {content.innerContent.map((item) => (
                        <li className={item.class}>{item.text}</li>
                      ))}
                    </content.element>
                  );
                } else if (content.element === "img") {
                  return (
                    <img
                      className={content.class}
                      src={content.imageUrl}
                      alt={content.alt}
                    >
                      {content.innerContent}
                    </img>
                  );
                } else if (content.element !== "ol") {
                  return (
                    <content.element className={content.class}>
                      {content.innerContent}
                    </content.element>
                  );
                }
              })}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default BlogPage;
