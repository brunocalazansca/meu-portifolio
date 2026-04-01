import { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Download, Mail, ExternalLink } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
import perfilImg from "../../assets/images/perfil.png";
import { technologies } from "../../data/technologies";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import ProjectModal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";
import styles from "./App.module.scss";

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
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center">

            <Col md={6} lg={7} className="text-md-start pt-5 pt-md-0">
              <motion.div
                  initial={styles.initial}
                  animate={styles.animate}
                  transition={{ duration: 0.8 }}
              >
                <h2 className={`${styles.heroGreeting} fw-bold`}>
                  Olá, eu sou o
                </h2>

                <div className="d-inline-block text-center mb-5 mt-2">
                  <h1 className={`${styles.heroTitle} fw-bold mb-2 text-white`}>
                    <span className={styles.textPrimaryCustom}>Bruno Calazans</span>
                  </h1>

                  <h3 className={`${styles.heroSubtitle} mb-2 mt-4 ${styles.textSecondaryCustom} fs-5`}>
                    Desenvolvedor Full Stack
                  </h3>

                  <h3 className={`${styles.heroSubtitle} mb-0 ${styles.textSecondaryCustom} fs-5 mt-2`}>
                    PHP | Laravel | React | React Native
                  </h3>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <a
                      href='../../../public/documents/curriculo.pdf'
                      download="Bruno_Calazans_CV.pdf"
                      className="text-decoration-none"
                  >
                    <Button className={`${styles.btnPrimaryCustom} px-4 py-2 d-flex align-items-center gap-2`}>
                      <Download size={18} />
                      Download CV
                    </Button>
                  </a>

                  <a href="https://github.com/brunocalazansca" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <Button className={`${styles.btnPrimaryCustom} px-4 py-2 d-flex align-items-center gap-2`}>
                      <FaGithub size={20} color="#000" />
                      GitHub
                    </Button>
                  </a>

                  <Button
                      href="mailto:bcalazanscarritilha@gmail.com"
                      className={`${styles.btnOutlineCustom} px-4 py-2 d-flex align-items-center gap-2`}
                  >
                    <Mail size={18} />
                    Entrar em Contato
                  </Button>
                </div>
              </motion.div>
            </Col>

            <Col md={6} lg={5} className="d-flex justify-content-center justify-content-md-end mt-5 mt-md-0">
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="position-relative"
              >
                <div className={styles.heroImageWrapper}>
                  <Image
                      src={perfilImg}
                      alt="Perfil"
                      className="w-100 h-100 object-fit-cover"
                  />
                  <div className={styles.heroImageGlow}></div>
                </div>
              </motion.div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className={`${styles.aboutSection} py-5 border-top border-dark`}>
        <Container>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
          >
            <h2 className={`fw-bold mb-4 text-white`}>
              Sobre mim
            </h2>
            <p className={`${styles.aboutText} mx-auto mb-0`}>
              Formado em Análise e Desenvolvimento de Sistemas: IFG - Campus Formosa.<br/>
              Sólida experiência no ecossistema PHP (Laravel) e JavaScript (React/React Native). Apaixonado pelo desenvolvimento de aplicações rápidas, escaláveis e com foco na experiência do usuário, buscando evoluir continuamente a performance e acessibilidade.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className={`${styles.techSection} py-5`}>
        <Container>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className={`${styles.techTitle} fw-bold mb-4`}>
              Tecnologias & Ferramentas
            </h2>

            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <motion.span
                    key={tech}
                    className={styles.techBadge}
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

      <section className={`${styles.projectsSection} py-5`}>
        <Container>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className={`${styles.sectionTitle} fw-bold mb-4`}>Projetos</h2>
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
                  <div className={`${styles.projectCard} h-100`}>
                    <div className={styles.projectCardImage}>
                      <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                      />
                    </div>

                    <div className={styles.projectCardBody}>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h3 className={styles.projectCardTitle}>{project.title}</h3>
                        <ExternalLink size={16} className={styles.projectCardLinkIcon} />
                      </div>

                      <p className={styles.projectCardDescription}>{project.description}</p>

                      <div className="d-flex flex-wrap gap-2 mt-auto pt-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className={styles.projectTag}>{tag}</span>
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

      <section className={`${styles.certSection} py-5 border-top border-dark`}>
        <Container>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className={`${styles.sectionTitle} fw-bold mb-4`}>Certificações</h2>

            <Row className="justify-content-center">
              <Col xs={12} sm={8} md={6} lg={4}>
                <motion.a
                    href="https://www.credly.com/badges/f1457b95-df8c-4287-9f31-31717a74c754"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-decoration-none"
                >
                  <div className={styles.certCard}>
                    <Image
                        src="https://github.com/user-attachments/assets/bd1604d1-a1df-40ef-9a05-b7f5240a0351"
                        alt="AWS Certified Cloud Practitioner"
                        fluid
                        className={styles.certImage}
                    />
                    <div className="mt-3 text-center">
                      <h4 className="text-white fs-5 mb-1">AWS Certified Cloud Practitioner</h4>
                      <p className={styles.textSecondaryCustom}>Amazon Web Services (AWS)</p>
                    </div>
                  </div>
                </motion.a>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleModalClose}
      />

      <Footer />
    </>
  );
};

export default HeroSection;