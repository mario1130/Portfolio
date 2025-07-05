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

const translations = {
  es: {
    greeting: "Buenas, Soy Mario",
    developer: "Desarrollador",
    resume: "Currículum",
    portfolio: "Portafolio",
    aboutMe: "Sobre mí",
    aboutText:
      "Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. Me especializo en crear soluciones eficientes y atractivas.",
    education: "Educación:",
    degree: "Ingeniería en Informática",
    university: "Universidad Complutense de Madrid",
    degreeYears: "2018 - 2022",
    course: "Curso de React",
    coursePlatform: "Udemy",
    courseYear: "2023",
    techStack: "Tech Stack:",
    projects: "Proyectos",
    project1: "Proyecto Uno",
    project1Desc:
      "Breve descripción del proyecto uno. Explica de qué trata y qué tecnologías usaste.",
    project2: "Proyecto Dos",
    project2Desc:
      "Breve descripción del proyecto dos. Explica de qué trata y qué tecnologías usaste.",
    code: "Código",
    demo: "Demo",
    info: "Información",
    myInfo: "Mi información",
    email: "tuemail@gmail.com",
    phone: "+34 600 000 000",
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
  const iconColor = darkMode ? "#00bfff" : "#222";
  const button1IconColor = darkMode ? "#00bfff" : "#fff";

  return (
    <div className="home-container" id="home">
      <div className="columns">
        <div className="left-column">
          <p>{t.greeting}</p>
          <h1>{t.developer}</h1>
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
            <button>
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
                  <FaGithub size={46} color="black" />
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
                    {t.resume}{" "}
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
              <img src="https://via.placeholder.com/300x180" alt={t.project2} />
              <h3>{t.project2}</h3>
              <p>{t.project2Desc}</p>
              <div className="project-buttons">
                <a
                  href="https://github.com/usuario/proyecto1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button1">
                    {t.resume}{" "}
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
            {/* Proyecto 3 */}
            <div className="project-card">
              <img src="https://via.placeholder.com/300x180" alt={t.project2} />
              <h3>{t.project2}</h3>
              <p>{t.project2Desc}</p>
              <div className="project-buttons">
                <a
                  href="https://github.com/usuario/proyecto1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button1">
                    {t.resume}{" "}
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
                      href="https://github.com/tuusuario"
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
                      href="https://linkedin.com/in/tuusuario"
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
              <form>
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
