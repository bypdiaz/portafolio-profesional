import { motion } from "framer-motion";
import { contactData } from "../data/contact";

import "../styles/sections/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Hablemos
          </h2>

          <p className="section-subtitle">
            Estoy abierto a oportunidades laborales,
            proyectos tecnológicos y colaboraciones.
          </p>
        </motion.div>

        <div className="contact-grid">

          <a
            href={`mailto:${contactData.email}`}
            className="contact-card"
          >
            <h3>Email</h3>

            <p>{contactData.email}</p>
          </a>

          <a
            href={`https://wa.me/${contactData.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>WhatsApp</h3>

            <p>{contactData.phone}</p>
          </a>

          <a
            href={contactData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>LinkedIn</h3>

            <p>Perfil Profesional</p>
          </a>

          <a
            href={contactData.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>GitHub</h3>

            <p>Repositorios y Proyectos</p>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;