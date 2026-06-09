import { motion } from "framer-motion";

import { projectsData } from "../data/projects";

import "../styles/sections/projects.css";

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
    >

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            Otros Proyectos
          </h2>

          <p className="section-subtitle">
            Soluciones desarrolladas para aprender,
            experimentar y resolver problemas reales.
          </p>

        </motion.div>

        <div className="projects-grid">

          {projectsData.map((project, index) => (

            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15
              }}
              viewport={{ once: true }}
            >

              <div className="project-thumbnail">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-content">

                <span className="project-badge">
                  {project.status}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tags">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-actions">

                  <button className="project-btn">
                    Ver Detalles
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;