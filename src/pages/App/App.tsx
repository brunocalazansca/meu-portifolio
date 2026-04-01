import { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Download, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import { technologies } from "../../data/technologies";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import ProjectModal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";
import "./App.css";

const HeroSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <Container>
          <Row className="align-items-center">

            {/* Lado Esquerdo: Textos */}
            <Col md={6} lg={7} className="text-md-start pt-5 pt-md-0">
              <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
              >
                <p className="text-primary-custom fw-semibold mb-2" style={{ letterSpacing: "2px", fontSize: "0.85rem", textTransform: "uppercase" }}>
                  OLÁ, EU SOU
                </p>

                <h1 className="fw-bold mb-3 text-white display-3" style={{ fontSize: "4rem" }}>
                  Seu Nome
                </h1>

                <h2 className="mb-4 text-secondary-custom" style={{ fontWeight: 400, fontSize: "1.75rem" }}>
                  Desenvolvedor Full Stack
                </h2>

                <p className="mb-5 text-muted-custom" style={{ maxWidth: "480px", fontSize: "1.1rem", lineHeight: "1.6" }}>
                  Criando experiências digitais modernas e escaláveis com foco
                  em performance e design.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Button className="btn-primary-custom px-4 py-2 d-flex align-items-center gap-2">
                    <Download size={18} />
                    Baixar Currículo
                  </Button>

                  <Button className="btn-outline-custom px-4 py-2 d-flex align-items-center gap-2">
                    <Mail size={18} />
                    Entrar em Contato
                  </Button>
                </div>
              </motion.div>
            </Col>

            {/* Lado Direito: Imagem */}
            <Col md={6} lg={5} className="d-flex justify-content-center justify-content-md-end mt-5 mt-md-0">
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="position-relative"
              >
                <div className="hero-image-wrapper">
                  <Image
                      src={heroImg}
                      alt="Perfil"
                      className="w-100 h-100 object-fit-cover"
                  />
                  <div className="hero-image-glow"></div>
                </div>
              </motion.div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Tecnologias & Ferramentas */}
      <section className="tech-section py-5">
        <Container>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="tech-title fw-bold mb-4">
              Tecnologias & Ferramentas
            </h2>

            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <motion.span
                    key={tech}
                    className="tech-badge"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Projetos */}
      <section className="projects-section py-5">
        <Container>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="section-title fw-bold mb-4">Projetos</h2>
          </motion.div>

          <Row className="g-4">
            {projects.map((project, i) => (
              <Col key={project.id} md={6} lg={4}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="h-100"
                    onClick={() => handleCardClick(project)}
                >
                  <div className="project-card h-100">
                    <div className="project-card-image">
                      <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                      />
                    </div>

                    <div className="project-card-body">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h3 className="project-card-title">{project.title}</h3>
                        <ExternalLink size={16} className="project-card-link-icon" />
                      </div>

                      <p className="project-card-description">{project.description}</p>

                      <div className="d-flex flex-wrap gap-2 mt-auto pt-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal */}
      <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleModalClose}
      />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HeroSection;