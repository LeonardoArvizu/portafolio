import React from "react";
import Hero from "./sections/hero/Hero";

//Css Module
import cssModule from "./Home.module.css";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <div className={cssModule["hero-container"]}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <br></br>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
