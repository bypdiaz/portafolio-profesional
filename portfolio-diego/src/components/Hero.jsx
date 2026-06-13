import { motion } from "framer-motion";
import "../styles/sections/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="hero-tag">
            Logística • Administración • Tecnología
          </span>

          <h1>
            Diego Daniel Diaz
          </h1>

          <p className="info-card">
            Técnico en Desarrollo de Aplicaciones Informáticas
            con experiencia en logística, administración y
            operaciones industriales. Desarrollo soluciones
            digitales orientadas a optimizar procesos y resolver
            problemas reales.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              Ver proyectos
            </a>

            <a href="#contact" className="btn-secondary">
              Contactar
            </a>

            <a
              href="/cv-diego-diaz.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Descargar CV
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat">
              <h3>5+</h3>
              <span>Años de experiencia</span>
            </div>

            <div className="stat">
              <h3>2024</h3>
              <span>Técnico en Desarrollo</span>
            </div>

            <div className="stat">
              <h3>2</h3>
              <span>Negocio + Tecnología</span>
            </div>

          </div>

          <div className="hero-skills">

            <span>SAP S/4HANA</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>Git</span>
            <span>Logística</span>

          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="hero-illustration">

            <div className="hero-card">

              <img
                src="images/profile.png"
                alt="Diego Daniel Diaz"
                className="hero-avatar"
              />

              <h3>
                Disponible para oportunidades
              </h3>

              <p>
                Administración • SAP • Desarrollo Web
              </p>

              <div className="hero-badges">

                <span>React</span>
                <span>SAP</span>
                <span>SQL</span>
                <span>Logística</span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;