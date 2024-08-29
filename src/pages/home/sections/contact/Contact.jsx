import React from "react";
import cssModule from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={cssModule.container}>
      <h1 className={cssModule.sectionTitle}>Contacto</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Contact;
