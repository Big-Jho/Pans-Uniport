import { useEffect, useState } from "react";
import NavCombo from "../layout/NavCombo";
import Footer from "../layout/Footer";
import ScrollReveal from "../ScrollReveal";

function Contact() {
  const [name, setName] = useState("");
  const [nameCaution, setNameCaution] = useState("");
  const [email, setEmail] = useState("");
  const [emailCaution, setEmailCaution] = useState("");
  const [message, setMessage] = useState("");
  const [messageCaution, setMessageCaution] = useState("");
  const [btnActive, setBtnActive] = useState(false);

  const checkName = (e) => {
    if (e.target.value.trim() === "") {
      setNameCaution("*This field is required");
      setBtnActive(false);
    } else if (e.target.value.trim().length < 3) {
      setNameCaution("Input a valid name");
      setBtnActive(false);
    } else {
      setNameCaution("");
    }

    return;
  };

  const checkEmail = (e) => {
    if (e.target.value.trim() === "") {
      setEmailCaution("*This field is required");
      setBtnActive(false);
    } else if (e.target.value.trim().length < 3) {
      setEmailCaution("Input a valid email");
      setBtnActive(false);
    } else {
      setEmailCaution("");
    }

    return;
  };

  const checkMessage = (e) => {
    if (e.target.value.trim() === "") {
      setMessageCaution("*This field is required");
      setBtnActive(false);
    } else {
      setMessageCaution("");
    }

    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      return;
    } else if (
      name.trim().length < 3 ||
      email.trim().length < 3 ||
      message.trim().length < 3
    ) {
      return;
    }

    const entries = {
      name,
      email,
      message,
    };

    console.log(entries, "Form Submitted");

    setName("");
    setEmail("");
    setMessage("");
  };

  const scrollTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => scrollTop(), []);

  return (
    <main>
      <NavCombo navColor="white" />
      <section className="grid gid-cols-1  xl:grid-cols-2  gap-y-8 xl:gap-y-0 h-fit mb-10 xl:mb-0">
        {/* Image - left */}
        <div className="bg-fatimaBg bg-cover bg-center bg-no-repeat py-24 h-[70vh] lg:h-[85vh] xl:h-full"></div>
        {/* Content - right */}

        <div className="bg-white xl:py-10 px-10  xl:pt-40 ">
          <div className="container flex flex-col md:flex-row md:justify-between  w-full  mx-auto space-y-10 md:space-y-0 p-10 md:p-0">
            <ScrollReveal type="fromBottom" className="w-fit">
              <div className="w-fit">
                <h4 className="text-2xl">Our Board</h4>
                <p className="mt-2 md:mt-6 text-ash">PANS Secretariat</p>
                <p className="text-ash">Faculty of Pharmaceutical Sciences</p>
                <p className="text-ash">UNIPORT, Rivers, Nigeria</p>
              </div>
            </ScrollReveal>
            <ScrollReveal type="fromBottom" className="w-min">
              <div className="w-fit">
                <h4 className="text-2xl">Get in Touch</h4>
                <p className="mt-2 md:mt-6 text-ash">+234 903 560 3978</p>
                <p className="text-ash">+234 813 161 1652</p>
                <p className="text-ash">
                  pansuniporteditorialboard10@gmail.com
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Form started */}

          <ScrollReveal type="fromBottom">
            <form className="w-full mx-auto mt-10" onSubmit={handleSubmit}>
              <p className="font-thin text-ash text-center">
                Contact us to find out more, and we will get back to you.
              </p>
              <p className="text-ash/60 text-center">Please fill all fields</p>

              <div className="mt-2 space-y-6">
                <div className="input-wraper relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      checkName(e);
                    }}
                    className="w-full py-3 px-6 text-ash border-2 border-gray focus:outline-none"
                    placeholder="Name"
                    required
                  />

                  <p className="text-red-500 font-thin mt-1 text-sm px-6">
                    {nameCaution}
                  </p>
                </div>

                <div className="input-wraper relative">
                  <input
                    type="message"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      checkEmail(e);
                    }}
                    className="w-full py-3 px-6 text-ash border-2 border-gray focus:outline-none"
                    placeholder="Email"
                    required
                  />
                  <p className="text-red-500 font-thin mt-1 text-sm px-6">
                    {emailCaution}
                  </p>
                </div>

                <div className="input-wraper relative">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      checkMessage(e);
                    }}
                    className="w-full py-3 px-6 text-ash border-2 border-gray focus:outline-none"
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                  <p className="text-red-500 font-thin mt-1 text-sm px-6">
                    {messageCaution}
                  </p>
                </div>
                <button
                  type="submit"
                  className={`py-3 px-6 bg-black hover:bg-opacity-70 text-white disabled:bg-opacity-70`}
                  disabled={btnActive}
                >
                  Submit
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Contact;
