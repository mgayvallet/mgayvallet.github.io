import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cardsRef = useRef([]);
  const typingRef = useRef(null);
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [btnGreen, setBtnGreen] = useState(false);

  useEffect(() => {
    const text = "Web and mobile web developer";
    const el = typingRef.current;
    if (!el) return;
    el.innerHTML = "";

    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      el.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.1,
        delay: i * 0.1,
        ease: "power1.inOut",
      });
    });

    gsap.utils.toArray(".reveal").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
        }
      );
    });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  const works = ["Dashboard", "Kanban", "Gallery", "Portfolio"];

  const descriptions = {
    Dashboard: "A responsive admin panel with analytics and charts.",
    Kanban: "A task management board with drag-and-drop support.",
    Gallery: "A modern photo gallery layout with lightbox support.",
    Portfolio: "A personal portfolio built with React and Tailwind CSS.",
  };

  const links = {
    Dashboard: "https://github.com/mgayvallet/dashboard",
    Kanban: "https://github.com/mgayvallet/KanBan",
    Gallery: "https://github.com/mgayvallet/galerie",
    Portfolio: "https://github.com/mgayvallet/Portfolio",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("SVC12345", "template_lbhqwwk", e.target, "K2fIxH_M71YlMpFNj")
      .then(() => {
        setMessageSent(true);
        setBtnGreen(true);
        setSending(false);
        e.target.reset();
        setTimeout(() => setBtnGreen(false), 20000);
      })
      .catch((error) => {
        console.error(error.text);
        setSending(false);
      });
  };

  const clearInput = (e) => {
    e.target.value = "";
  };

  return (
    <>
      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          background: linear-gradient(270deg, #000, #2a2a2a, #000, #4b0082);
          background-size: 600% 600%;
          animation: gradient-bg 15s ease infinite;
          position: fixed;
          inset: 0;
          z-index: -1;
        }
      `}</style>

      <div className="animate-gradient-bg" aria-hidden="true" />

      <main className="relative min-h-screen text-white font-sans" role="main">
        <header
          className="h-screen flex flex-col justify-center items-center text-center px-4"
          role="banner"
        >
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            MATHIEU GAYVALLET
          </h1>
          <p
            ref={typingRef}
            aria-label="Typing description"
            className="text-xl text-gray-400 mt-3"
          />
        </header>

        <section
          className="px-6 sm:px-10 py-20 max-w-4xl mx-auto reveal"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="text-3xl font-bold mb-6 text-center"
          >
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-center text-gray-300">
            Passionate web developer specializing in modern and responsive
            interfaces. I enjoy transforming ideas into concrete products by
            combining design and performance. Currently seeking new challenges
            to continue learning and innovating.
          </p>
        </section>

        <section
          className="py-16 px-6 sm:px-10 max-w-5xl mx-auto reveal"
          aria-labelledby="skills-heading"
        >
          <h2
            id="skills-heading"
            className="text-3xl font-bold mb-10 text-center"
          >
            Technical Skills
          </h2>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-300"
            role="list"
          >
            {[
              "HTML",
              "React.js",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "Git / GitHub",
              "API REST",
            ].map((skill) => (
              <li
                key={skill}
                className="hover:scale-105 transition-transform duration-300"
                role="listitem"
              >
                🔹 {skill}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="py-16 px-6 sm:px-10 max-w-7xl mx-auto reveal"
          aria-labelledby="projects-heading"
        >
          <h2
            id="projects-heading"
            className="text-4xl font-bold mb-16 text-center"
          >
            Featured Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {works.map((title, index) => (
              <article
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-neutral-900 rounded-3xl shadow-xl overflow-hidden transform scale-95 transition hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                style={{ height: "440px", maxWidth: "300px", margin: "0 auto" }}
                aria-labelledby={`project-${index}`}
              >
                <div className="flex flex-col h-full w-full rounded-3xl">
                  <div
                    className="relative w-full"
                    style={{ height: "240px" }}
                    role="img"
                    aria-label={`${title} preview image`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.05] transition-transform duration-700"
                      style={{
                        backgroundImage: `url(/${title.toLowerCase()}.png)`,
                        transform: "scale(0.85)",
                        backgroundRepeat: "no-repeat",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="px-5 pt-4 text-left">
                    <h3
                      id={`project-${index}`}
                      className="text-xl font-semibold"
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {descriptions[title]}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 px-5 mt-4">
                    {title === "Portfolio" ? (
                      <>
                        <span className="bg-cyan-400 text-black text-xs font-medium px-3 py-1 rounded-full">
                          React
                        </span>
                        <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Tailwind
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-orange-400 text-black text-xs font-medium px-3 py-1 rounded-full">
                          HTML
                        </span>
                        <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                          CSS
                        </span>
                        <span className="bg-yellow-300 text-black text-xs font-medium px-3 py-1 rounded-full">
                          JavaScript
                        </span>
                      </>
                    )}
                  </div>
                  <a
                    href={links[title]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <button className="bg-white text-black font-semibold px-4 py-2 text-sm rounded-full hover:bg-gray-200">
                      View Code
                    </button>
                  </a>
                  <div className="flex-1" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="py-16 reveal text-center"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-3xl font-bold mb-6">
            Contact
          </h2>

          {messageSent ? (
            <p
              className="text-green-400 text-lg font-semibold animate-pulse"
              role="status"
              aria-live="polite"
            >
              ✅ Merci pour votre message, je vous réponds bientôt !
            </p>
          ) : (
            <form
              onSubmit={sendEmail}
              className="max-w-md mx-auto text-left space-y-6 px-6 py-6 bg-neutral-900 rounded-lg shadow-lg"
              aria-label="Contact form"
            >
              <label htmlFor="name" className="sr-only">
                Nom
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                onFocus={clearInput}
                className="w-full px-4 py-3 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={sending}
              />

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Votre email"
                onFocus={clearInput}
                className="w-full px-4 py-3 rounded bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={sending}
              />

              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Votre message"
                onFocus={clearInput}
                className="w-full px-4 py-3 rounded bg-neutral-800 text-white border border-neutral-700 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={sending}
              />

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3 rounded font-semibold transition text-white
                  ${
                    btnGreen
                      ? "bg-green-600"
                      : sending
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }
                `}
              >
                {sending ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          )}
        </section>
        <footer className="py-8 px-6 sm:px-10 border-t border-neutral-800 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="hover:text-purple-400 transition-colors duration-300">
              © {new Date().getFullYear()} Mathieu Gayvallet. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/mgayvallet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
