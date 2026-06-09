import { motion } from "framer-motion";
import { servicesData } from "../data/services";
import "../styles/sections/services.css";

function Services() {
  return (
    <section id="services" className="services">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            ¿Cómo puedo ayudarte?
          </h2>

          <p className="section-subtitle">
            Soluciones que combinan experiencia operativa,
            gestión empresarial y tecnología.
          </p>
        </motion.div>

        <div className="services-grid">

          {servicesData.map((service, index) => (

            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </motion.div>

          ))}

        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>
            ¿Tienes una idea o proyecto?
          </h3>

          <p>
            Estoy abierto a nuevas oportunidades,
            colaboraciones y proyectos tecnológicos.
          </p>

          <a href="#contact" className="btn-primary">
            Contactarme
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Services;