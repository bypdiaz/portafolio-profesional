import { motion } from "framer-motion";
import "../styles/sections/about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Mi Perfil Profesional
          </h2>

          <p className="section-subtitle">
            Experiencia operativa, gestión empresarial y desarrollo de software.
          </p>
        </motion.div>

        <div className="about-cards">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
          >
            <h3>Operaciones</h3>

            <p>
              Experiencia en entornos industriales,
              logística de distribución, control de
              procesos y coordinación operativa.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <h3>Tecnología</h3>

            <p>
              Desarrollo de aplicaciones web modernas
              utilizando React, JavaScript, SQL,
              Git y tecnologías Full Stack.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .9 }}
            viewport={{ once: true }}
          >
            <h3>Gestión</h3>

            <p>
              Manejo de SAP S/4HANA,
              análisis de datos,
              documentación operativa
              y reportes gerenciales.
            </p>
          </motion.div>

        </div>

        <motion.div
          className="about-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <h3>Mi recorrido</h3>

          <p>
            Inicié mi carrera profesional en entornos industriales,
            desempeñándome en operaciones de producción y control de procesos.
            Con el tiempo evolucioné hacia funciones administrativas y logísticas,
            participando en la gestión operativa, control documental,
            análisis de información y utilización de SAP S/4HANA.
          </p>

          <p>
            Actualmente complemento esa experiencia con el desarrollo de software,
            aplicando tecnologías modernas para crear soluciones digitales y
            proyectos propios como <strong>Envidriera</strong>, una plataforma
            web desarrollada con enfoque Full Stack.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default About;