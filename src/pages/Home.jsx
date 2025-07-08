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
import { EMAILJS_CONFIG } from "../config/emailConfig";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiKotlin,
} from "react-icons/si";

const translations = {
  es: {
    greeting: "Buenas, Soy Mario 👋",
    developer: "Desarrollador",
    text: "Apasionado del desarrollo de aplicaciones web.",
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
    project1: "Artify3D",
    project1Desc:
      "Proyecto final de curso dedicado a la creación y visualización de modelos 3D interactivos.",
    project2: "Microservicio de Login (Backend)",
    project2Desc:
      "Microservicio de autenticación y gestión de usuarios. Modular, escalable y dockerizado.",
    project3: "Portfolio",
    project3Desc:
      "Portfolio personal desarrollado con React, donde muestro mis proyectos, habilidades y experiencia.",
    project4: "Leveling",
    project4Desc:
      "Esta aplicación móvil está pensada para ayudarte a llevar un seguimiento personalizado de tu actividad física.",
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
    greeting: "Hi, I'm Mario 👋",
    developer: "Developer",
    text: "Passionate about web application development.",
    resume: "Resume",
    portfolio: "Portfolio",
    aboutMe: "About Me",
    aboutText:
      "Recently graduated web application developer with experience in backend using Node.js, JavaScript, Docker, and RabbitMQ. During my internship at IC Grupo, I worked on microservices integration and scalability. I have also developed projects using PHP, Laravel, HTML, CSS, and React. I'm a committed person with a strong desire to continue learning and growing professionally in the software development field.",
    education: "Education:",
    degree: "Technician in Web Application Development",
    university: "ITEC | Official Vocational Training Center",
    degreeYears: "2023 - 2025",
    course: "Computer Systems Programming",
    coursePlatform: "CESUR Málaga",
    courseYear: "2023",
    techStack: "Tech Stack:",
    projects: "Projects",
    project1: "Artify3D",
    project1Desc:
      "Brief description of the first project. Explain what it is about and what technologies you used.",
    project2: "Login Microservice (Backend)",
    project2Desc:
      "Authentication and user management microservice. Modular, scalable, and dockerized.",
    project3: "Portfolio",
    project3Desc:
      "Personal portfolio developed with React, showcasing my projects, skills, and experience.",
    project4: "Leveling",
    project4Desc:
      "This mobile application is designed to help you keep a personalized track of your physical activity.",
    code: "Code",
    demo: "Demo",
    info: "Information",
    myInfo: "My Information",
    email: "pascualmedinamario@gmail.com",
    phone: "+34 671 119 596",
    name: "Name",
    gmail: "Email",
    message: "Message",
    send: "Send",
  },
};
function Home({ lang, darkMode }) {
  const t = translations[lang];
  const iconColor = darkMode ? "#00bfff" : "#fff";
  const button1IconColor = darkMode ? "#00bfff" : "#fff";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        e.target,
        EMAILJS_CONFIG.USER_ID
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarme. Te responderé pronto.",
            confirmButtonColor: "#2196f3",
          });
        },
        () => {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">
  {t.developer}
</h1>
          <p>{t.text}</p>
          <div className="buttons">
            <button
              className="button1"
              onClick={() => {
                const link = document.createElement("a");
                link.href = `${process.env.PUBLIC_URL}/CVMARIO.pdf`;
                link.download = "CVMARIO.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
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
            <img src={`${process.env.PUBLIC_URL}/perfil.png`} alt="Tu Foto" />
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
            <img
              src={`${process.env.PUBLIC_URL}/Artify3d.PNG`}
              alt={t.project1}
            />
            <h3>{t.project1}</h3>
            <div className="project-languages">
              <span className="language-badge react">
                <SiReact style={{ marginRight: "6px", verticalAlign: "middle" }} />
                React
              </span>
              <span className="language-badge js">
                <SiJavascript style={{ marginRight: "6px", verticalAlign: "middle" }} />
                JavaScript
              </span>
            </div>
            <p>{t.project1Desc}</p>
            <div className="project-buttons">
              <a href="https://github.com/mario1130/Artify3D" target="_blank" rel="noopener noreferrer">
                <button className="button1">
                  {t.code}
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
              <a href="https://github.com/mario1130/Artify3D" target="_blank" rel="noopener noreferrer">
                <button>
                  {t.demo}
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
            <img
              src={`${process.env.PUBLIC_URL}/Microservicio.PNG`}
              alt={t.project2}
            />
            <h3>{t.project2}</h3>
            <div className="project-languages">
              <span className="language-badge node">
                <SiNodedotjs style={{ marginRight: "6px", verticalAlign: "middle" }} />
                Node.js
              </span>
              <span className="language-badge python">
                <SiPython style={{ marginRight: "6px", verticalAlign: "middle" }} />
                Python
              </span>
            </div>
            <p>{t.project2Desc}</p>
            <div className="project-buttons">
              <a href="https://github.com/mario1130/Microservicio_Login" target="_blank" rel="noopener noreferrer">
                <button className="button1">
                  {t.code}
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
              <a href="https://github.com/mario1130/Microservicio_Login" target="_blank" rel="noopener noreferrer">
                <button>
                  {t.demo}
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
            <img
              src={`${process.env.PUBLIC_URL}/Portfolio.PNG`}
              alt={t.project3}
            />
            <h3>{t.project3}</h3>
            <div className="project-languages">
              <span className="language-badge react">
                <SiReact style={{ marginRight: "6px", verticalAlign: "middle" }} />
                React
              </span>
              <span className="language-badge js">
                <SiJavascript style={{ marginRight: "6px", verticalAlign: "middle" }} />
                JavaScript
              </span>
            </div>
            <p>{t.project3Desc}</p>
            <div className="project-buttons">
              <a href="https://github.com/mario1130/Portfolio" target="_blank" rel="noopener noreferrer">
                <button className="button1">
                  {t.code}
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
              <a href="https://mario1130.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                <button>
                  {t.demo}
                  <FiExternalLink
                    size={24}
                    style={{ marginLeft: "4px", verticalAlign: "middle" }}
                  />
                </button>
              </a>
            </div>
          </div>

          {/* Proyecto 4 - En construcción */}
          <div className="project-card">
            <img
              src={`${process.env.PUBLIC_URL}/loading.gif`}
              alt="En construcción"
              style={{ height: "133px", width: "50%", objectFit: "cover" }}
            />
            <h3>{t.project4}</h3>
            <div className="project-languages">
              <span className="language-badge kotlin">
                <SiKotlin style={{ marginRight: "6px", verticalAlign: "middle" }} />
                Kotlin
              </span>
            </div>
            <p>{t.project4Desc}</p>
            <div className="project-buttons">
              <button className="button1" disabled style={{ cursor: "not-allowed" }} title="Proyecto en construcción">
                Código
                <MdDescription
                  size={24}
                  style={{
                    color: button1IconColor,
                    marginLeft: "4px",
                    verticalAlign: "middle",
                  }}
                />
              </button>
              <button disabled style={{ cursor: "not-allowed", marginLeft: "8px" }} title="Proyecto en construcción">
                Demo
                <FiExternalLink
                  size={24}
                  style={{ marginLeft: "4px", verticalAlign: "middle" }}
                />
              </button>
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
                  />
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
                  />
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
