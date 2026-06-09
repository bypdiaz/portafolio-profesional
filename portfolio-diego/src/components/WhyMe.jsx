import { motion } from "framer-motion";
import { whyMeData } from "../data/whyMe";

import "../styles/sections/whyMe.css";

function WhyMe() {
  return (
    <section className="why-me">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            ¿Por qué trabajar conmigo?
          </h2>

          <p className="section-subtitle">
            Una combinación de experiencia práctica,
            visión empresarial y tecnología.
          </p>
        </motion.div>

        <div className="why-grid">

          {whyMeData.map((item, index) => (

            <motion.div
              key={item.title}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15
              }}
              viewport={{ once: true }}
            >

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyMe;