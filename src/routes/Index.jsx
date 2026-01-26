import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const heroRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" },
    );

    gsap.fromTo(
      ".hero-cta",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" },
    );

    gsap.utils.toArray(".fade-in-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      );
    });

    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
          },
        );
      }
    });

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      icon: Layout,
      items: [
        "React.js",
        "Vue.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Accessibility",
        "Performance Optimization",
        "Ux/Ui Design",
      ],
    },
    {
      name: "Backend Development",
      icon: Database,
      items: ["Node.js", "Express", "SQL/My SQL", "PHP"],
    },
    {
      name: "Tools & Workflow",
      icon: Code2,
      items: ["Git & GitHub", "VS Code", "npm/yarn", "Agile/Scrum"],
    },
  ];

  const projects = [
    {
      title: "Mini Notion",
      description:
        "A minimal and efficient web-based note management. The goal of this application is to provide a clean, structured, and collaborative way to store personal content, notes, and ideas.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "/miniNotion.png",
      github: "https://github.com/mgayvallet/miniNotion",
      demo: "#",
    },
    {
      title: "Kanban Board",
      description:
        "Interactive kanban board with drag-and-drop and real-time synchronization.",
      tech: ["React", "Firebase", "Tailwind", "WebSockets"],
      image: "/kanban.png",
      github: "https://github.com/mgayvallet/kanban",
      demo: "#",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-gray-900">
              MG
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mathieu Gayvallet
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Web & Mobile Developer
          </p>
          <p className="hero-subtitle text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Creating modern, scalable, and user-friendly web applications with
            cutting-edge technologies. Passionate about clean code and
            exceptional user experiences.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-24 px-6 lg:px-8 bg-gray-50 fade-in-section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a web and mobile web developer in continuous training, I design
              modern, high performance, and user experience focused
              applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Rigorous and persevering, I draw on the values ​​I acquired
              through ice hockey team spirit, discipline, and the ability to
              manage pressure to successfully complete my technical projects.
              Curious and constantly striving to improve, I seek to develop
              reliable and scalable solutions that meet user needs.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 lg:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and
            problem solving approaches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectsRef.current[index] = el)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-24 px-6 lg:px-8 bg-gray-50 fade-in-section"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from
            concept to deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => {
              const Icon = skillSet.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {skillSet.name}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {skillSet.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 lg:px-8 fade-in-section">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>

          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={formStatus === "sending"}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                  formStatus === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          )}

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/mgayvallet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="mailto:contact@mathieugayvallet.com"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Mathieu Gayvallet. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
