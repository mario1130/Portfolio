import React from "react";
import "./Home.scss";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { MdDescription } from "react-icons/md";
import { DiJava } from "react-icons/di";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const translations = {
  es: {
    greeting: "Buenas, Soy Mario",
    developer: "Desarrollador",
    resume: "Currículum",
    portfolio: "Portafolio",
    aboutMe: "Sobre mí",
    aboutText:
      "Desarrollador de aplicaciones web recién titulado, con experiencia en backend usando Node.js, JavaScript, Docker y RabbitMQ. He trabajado en la integración y escalabilidad de microservicios durante mis prácticas en IC Grupo, y también he desarrollado proyectos con PHP, Laravel, HTML, CSS y React. Soy una persona comprometida y con muchas ganas de seguir aprendiendo y creciendo profesionalmente en el sector del desarrollo de software.",
    education: "Educación:",
    degree: "Técnico en Desarrollo de Aplicaciones web.",
    university: "ITEC | Centro Oficial de FP",
    degreeYears: "2023 - 2025",
    course: "Programación de sistemas informáticos.",
    coursePlatform: "CESUR Málaga",
    courseYear: "2023",
    techStack: "Tech Stack:",
    projects: "Proyectos",
    project1: "Proyecto Uno",
    project1Desc:
      "Breve descripción del proyecto uno. Explica de qué trata y qué tecnologías usaste.",
    project2: "Proyecto Dos",
    project2Desc:
      "Breve descripción del proyecto dos. Explica de qué trata y qué tecnologías usaste.",
    project3: "Proyecto Tres",
    project3Desc:
      "Breve descripción del proyecto dos. Explica de qué trata y qué tecnologías usaste.",
    code: "Código",
    demo: "Demo",
    info: "Información",
    myInfo: "Mi información",
    email: "pascualmedinamario@gmail.com",
    phone: "+34 671 119 596",
    name: "Nombre",
    gmail: "Correo",
    message: "Mensaje",
    send: "Enviar",
  },
  en: {
    greeting: "Hi, I'm Mario",
    developer: "Developer",
    resume: "Resume",
    portfolio: "Portfolio",
    aboutMe: "About Me",
    aboutText:
      "I'm a developer passionate about technology and continuous learning. I specialize in creating efficient and attractive solutions.",
    education: "Education:",
    degree: "Computer Engineering",
    university: "Complutense University of Madrid",
    degreeYears: "2018 - 2022",
    course: "React Course",
    coursePlatform: "Udemy",
    courseYear: "2023",
    techStack: "Tech Stack:",
    projects: "Projects",
    project1: "Project One",
    project1Desc:
      "Brief description of project one. Explain what it is about and what technologies you used.",
    project2: "Project Two",
    project2Desc:
      "Brief description of project two. Explain what it is about and what technologies you used.",
    code: "Code",
    demo: "Demo",
    info: "Information",
    myInfo: "My information",
    email: "yourmail@gmail.com",
    phone: "+34 600 000 000",
    name: "Name",
    gmail: "Gmail",
    message: "Message",
    send: "Send",
  },
};

function Home({ lang, darkMode }) {
  const t = translations[lang];
  const iconColor = darkMode ? "#00bfff" : "#fff";
  const button1IconColor = darkMode ? "#00bfff" : "#fff";

  // Handler para enviar el formulario con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarme. Te responderé pronto.",
            confirmButtonColor: "#2196f3",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error al enviar el mensaje.",
            confirmButtonColor: "#e53935",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="home-container" id="home">
      <div className="columns">
        <div className="left-column">
          <p>{t.greeting}</p>
          <h1>{t.developer}</h1>
          <p>{t.greeting}</p>
          <div className="buttons">
            <button className="button1">
              {t.resume}{" "}
              <MdDescription
                size={24}
                style={{
                  color: iconColor,
                  marginLeft: "4px",
                  verticalAlign: "middle",
                }}
              />
            </button>
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  const yOffset = -80;
                  const y =
                    aboutSection.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              {t.portfolio}{" "}
              <FiArrowRight
                size={24}
                style={{ marginLeft: "4px", verticalAlign: "middle" }}
              />
            </button>
          </div>
        </div>
        <div className="right-column">
          <div className="profile-pic morphing-border">
            <img src="/perfil.png" alt="Tu Foto" />
          </div>
        </div>
      </div>

      <section className="about-me-section" id="about">
        <div className="about-me-content">
          <h2>{t.aboutMe}</h2>
          <p
            style={{ fontSize: "1.2rem", maxWidth: "105ch", textAlign: "left" }}
          >
            {t.aboutText}
          </p>
          <div className="about-columns">
            <div className="about-education">
              <h3>{t.education}</h3>
              <ul>
                <li>
                  {t.degree}
                  <div className="education-detail">{t.university}</div>
                  <div className="education-year">{t.degreeYears}</div>
                </li>
                <li>
                  {t.course}
                  <div className="education-detail">{t.coursePlatform}</div>
                  <div className="education-year">{t.courseYear}</div>
                </li>
              </ul>
            </div>
            <div className="about-tech">
              <h3>{t.techStack}</h3>
              <ul className="tech-list">
                <li>
                  <FaHtml5 size={46} color="#e44d26" />
                  <div>HTML</div>
                </li>
                <li>
                  <FaCss3Alt size={46} color="#1572b6" />
                  <div>CSS</div>
                </li>
                <li>
                  <DiJava size={46} color="#f89820" />
                  <div>Java</div>
                </li>
                <li>
                  <FaJs size={46} color="#f7df1e" />
                  <div>JavaScript</div>
                </li>
                <li>
                  <FaPhp size={46} color="#777bb4" />
                  <div>PHP</div>
                </li>
                <li>
                  <FaNodeJs size={46} color="#3c873a" />
                  <div>Node.js</div>
                </li>
                <li>
                  <FaGitAlt size={46} color="#f34f29" />
                  <div>Git</div>
                </li>
                <li>
                  <FaGithub
                    color={darkMode ? "black" : "white"}
                    size={46}
                    style={{ verticalAlign: "middle" }}
                  />
                  <div>GitHub</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-content">
          <h2>{t.projects}</h2>
          <div className="projects-columns">
            {/* Proyecto 1 */}
            <div className="project-card">
              <img src="https://via.placeholder.com/300x180" alt={t.project1} />
              <h3>{t.project1}</h3>
              <p>{t.project1Desc}</p>
              <div className="project-buttons">
                <a
                  href="https://github.com/usuario/proyecto1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button1">
                    {t.code}{" "}
                    <MdDescription
                      size={24}
                      style={{
                        color: button1IconColor,
                        marginLeft: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                  </button>
                </a>
                <a
                  href="https://demo-proyecto1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    {t.demo}{" "}
                    <FiExternalLink
                      size={24}
                      style={{ marginLeft: "4px", verticalAlign: "middle" }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* Proyecto 2 */}
            <div className="project-card">
              <img src="./Microservicio.PNG" alt={t.project2} />
              <h3>{t.project2}</h3>
              <p>{t.project2Desc}</p>
              <div className="project-buttons">
                <a
                  href="https://github.com/mario1130/Microservicio_Login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button1">
                    {t.code}{" "}
                    <MdDescription
                      size={24}
                      style={{
                        color: button1IconColor,
                        marginLeft: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                  </button>
                </a>
                <a
                  href="https://github.com/mario1130/Microservicio_Login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    {t.demo}{" "}
                    <FiExternalLink
                      size={24}
                      style={{ marginLeft: "4px", verticalAlign: "middle" }}
                    />
                  </button>
                </a>
              </div>
            </div>
            {/* Proyecto 3 */}
            <div className="project-card">
              <img src="./Portfolio.PNG" alt={t.project2} />
              <h3>{t.project2}</h3>
              <p>{t.project2Desc}</p>
              <div className="project-buttons">
                <a
                  href="https://github.com/mario1130/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button1">
                    {t.code}{" "}
                    <MdDescription
                      size={24}
                      style={{
                        color: button1IconColor,
                        marginLeft: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                  </button>
                </a>
                <a
                  href="https://demo-proyecto1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    {t.demo}{" "}
                    <FiExternalLink
                      size={24}
                      style={{ marginLeft: "4px", verticalAlign: "middle" }}
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-me-section" id="contact">
        <div className="contact-me-content">
          <div className="contact-columns">
            <div className="contact-info">
              <h1>{t.info}</h1>
              <p>{t.myInfo}</p>
              <ul>
                <li>
                  <MdEmail
                    color={iconColor}
                    size={32}
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  <span
                    style={{
                      color: darkMode ? "#fff" : "#222",
                      marginLeft: "8px",
                    }}
                  >
                    {t.email}
                  </span>
                </li>
                <li>
                  <MdPhone
                    color={iconColor}
                    size={32}
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  <span
                    style={{
                      color: darkMode ? "#fff" : "#222",
                      marginLeft: "8px",
                    }}
                  >
                    {t.phone}
                  </span>
                </li>
                <li>
                  <div className="contact-social">
                    <a
                      href="https://github.com/mario1130"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        color={iconColor}
                        size={32}
                        style={{ verticalAlign: "middle" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mario-pascual-427399164"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "5px" }}
                    >
                      <FaLinkedin
                        color={iconColor}
                        size={32}
                        style={{ verticalAlign: "middle" }}
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">{t.name}</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder={t.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gmail">{t.gmail}</label>
                  <input
                    type="email"
                    id="gmail"
                    name="gmail"
                    required
                    placeholder={t.gmail}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">{t.message}</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="10"
                    required
                    placeholder={t.message}
                  />
                </div>
                <button type="submit">{t.send}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
