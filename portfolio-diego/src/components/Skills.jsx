import { motion } from "framer-motion";
import {
  businessSkills,
  techSkills,
} from "../data/skills";

import "../styles/sections/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Habilidades y Tecnologías
          </h2>

          <p className="section-subtitle">
            Una combinación de experiencia empresarial y desarrollo tecnológico.
          </p>
        </motion.div>

        <div className="skills-grid">

          <motion.div
            className="skills-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <h3>Negocio y Gestión</h3>

            <div className="skills-tags">
              {businessSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </motion.div>

          <motion.div
            className="skills-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <h3>Desarrollo y Tecnología</h3>

            <div className="skills-tags">
              {techSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Skills;