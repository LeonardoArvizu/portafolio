import React from "react";

//Images
import pfp from "../../../../assets/images/profile-pic.png";

// Css module
import cssModule from "./Hero.module.css";

//Icons
import sun from "../../../../assets/imported-images/sun.svg";
import moon from "../../../../assets/imported-images/moon.svg";
import linkedinIconLight from "../../../../assets/imported-images/linkedin-light.svg";
import githubIconLight from "../../../../assets/imported-images/github-light.svg";
import githubIconDark from "../../../../assets/imported-images/github-dark.svg";
import linkedinIconDark from "../../../../assets/imported-images/linkedin-dark.svg";

//PDF
import CV from "../../../../assets/pdf/leonardo-cv.pdf";

//Context
import { useTheme } from "../../../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;

  return (
    <section id="hero" className={cssModule.container}>
      <div className={cssModule.colorModeContainer}>
        <img
          className={cssModule.hero}
          src={pfp}
          alt="profile-picture-leonardo"
        />
        <img
          className={cssModule.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
        <h1>
          Leonardo
          <br />
          Arvizu Valdez
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/leonardo-arvizu-valdez-571105279/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
          <a
            href="https://github.com/LeonardoArvizu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="linkedin-icon" />
          </a>
        </span>
      </div>
      <div className={cssModule.info}>
        <p className={cssModule.description}>
          Titulado de la carrera de Ingeniería en Sistemas Computacionales del
          Instituto Tecnológico de Mexicali, principalmente dedicado al
          desarrollo de aplicaciones web y móvil. He trabajado tanto en
          Front-end como Back-end al igual que con base de datos relacionales y
          no relaciones.
          <br /> <br />
          Tengo pasión por el aprendizaje continuo y mi objetivo es aplicar mis
          habilidades técnicas y creativas en un entorno desafiante que pueda
          fomentar mi crecimiento personal y profesional. He participado
          activamente en proyectos que requieren habilidades técnicas en todas
          las etapas del ciclo de vida del desarrollo de software. desde el
          diseño y la implementación hasta la depuración y la optimización.
        </p>
        <a href={CV} download>
          <button className="hover">Resumen</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
