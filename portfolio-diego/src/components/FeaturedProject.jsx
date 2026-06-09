import { motion } from "framer-motion";
import { useState } from "react";
import { featuredProject } from "../data/featuredProject";

import "../styles/sections/featuredProject.css";

function FeaturedProject() {

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="featured-project">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Proyecto Principal
          </h2>

          <p className="section-subtitle">
            El proyecto que representa mi evolución
            como desarrollador.
          </p>
        </motion.div>

        <div className="featured-content">

          <motion.div
            className="featured-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="project-status">
              {featuredProject.status}
            </span>

            <h3>
              {featuredProject.title}
            </h3>

            <p>
              {featuredProject.description}
            </p>

            <div className="project-tech">

              {featuredProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}

            </div>

            <ul className="project-features">

              {featuredProject.features.map((feature) => (
                <li key={feature}>
                  ✓ {feature}
                </li>
              ))}

            </ul>

            <div className="project-buttons">

              <a
                href={featuredProject.demo}
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Ver Demo
              </a>

              <a
                href={featuredProject.github}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>

          </motion.div>

          <motion.div
            className="featured-preview"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="preview-gallery">

              <img
                src={featuredProject.gallery[currentImage].image}
                alt="Envidriera"
                className="preview-image"
              />

              <button
                className="gallery-btn prev"
                onClick={() =>
                  setCurrentImage(
                    currentImage === 0
                      ? featuredProject.gallery.length - 1
                      : currentImage - 1
                  )
                }
              >
                ←
              </button>

              <button
                className="gallery-btn next"
                onClick={() =>
                  setCurrentImage(
                    currentImage === featuredProject.gallery.length - 1
                      ? 0
                      : currentImage + 1
                  )
                }
              >
                →
              </button>

            </div>

            <div className="gallery-thumbnails">

              {featuredProject.gallery.map((item, index) => (

                <button
                  key={index}
                  className={
                    currentImage === index
                      ? "thumb active"
                      : "thumb"
                  }
                  onClick={() => setCurrentImage(index)}
                >

                  <img
                    src={item.image}
                    alt={item.label}
                  />

                </button>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProject;