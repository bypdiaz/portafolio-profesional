import { motion } from "framer-motion";
import "../styles/sections/experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Experiencia Profesional
          </h2>

          <p className="section-subtitle">
            Evolución profesional en operaciones,
            logística, administración y sistemas.
          </p>
        </motion.div>

        <div className="timeline">

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            //transition={{ duration: .5 }}
            transition={{ duration: .8, delay: .2}}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span className="timeline-date">
                2020 - Actualidad
              </span>

              <h3>Ledesma S.A.A.I.</h3>

              <h4>Operaciones Industriales</h4>

              <p>
                Operación de equipos industriales,
                control de procesos,
                toma de muestras,
                mediciones y apoyo en mantenimiento.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <h4>Controlador de Depósito</h4>

              <p>
                Supervisión de cargas,
                control operativo,
                despacho de mercadería
                y validación documental.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <h4>Administrativo Logístico</h4>

              <p>
                Reportes gerenciales,
                análisis de despachos,
                control documental,
                seguimiento de indicadores
                y coordinación operativa.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <h4>Oficinista SAP S/4HANA</h4>

              <p>
                Gestión de despachos,
                registro de producción,
                control de ingresos y egresos,
                documentación de transporte
                y operación sobre SAP S/4HANA.
              </p>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Experience;