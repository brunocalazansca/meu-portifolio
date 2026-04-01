import { Modal, Button } from "react-bootstrap";
import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "../../data/projects";
import appStyles from "../../pages/App/App.module.scss";
import styles from "./Modal.module.scss";

interface ProjectModalProps {
    project: Project | null;
    open: boolean;
    onClose: () => void;
}

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <Modal
            show={open}
            onHide={onClose}
            size="lg"
            centered
            contentClassName={styles.projectModalContent}
        >
            <Modal.Header closeButton className={styles.projectModalHeader}>
                <Modal.Title className={styles.projectModalTitle}>
                    {project.title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className={styles.projectModalBody}>
                <div className="d-flex flex-column gap-4">

                    {/* Imagem */}
                    <div className={styles.projectModalImage}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-100 rounded-3"
                        />
                    </div>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className={styles.projectModalTag}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Descrição */}
                    <p className={styles.projectModalDescription}>
                        {project.details}
                    </p>

                    {/* Botões */}
                    <div className="d-flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <Button
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${appStyles.btnPrimaryCustom} d-inline-flex align-items-center gap-2 px-4 py-2`}
                            >
                                <ExternalLink size={16} />
                                Acessar Projeto
                            </Button>
                        )}

                        {project.repoUrl && (
                            <Button
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${appStyles.btnOutlineCustom} d-inline-flex align-items-center gap-2 px-4 py-2`}
                            >
                                <Code2 size={16} />
                                Repositório
                            </Button>
                        )}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ProjectModal;