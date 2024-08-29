import React from "react";
import cssModule from "./Footer.module.css";

const Footer = () => {
  return (
    <section id="footer" className={cssModule.container}>
      <p>&copy; 2024 Leonardo Arvizu.</p>
    </section>
  );
};

export default Footer;
