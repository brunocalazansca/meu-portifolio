import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, Badge } from "react-bootstrap";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    details: string;
    liveUrl?: string;
    repoUrl?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className="h-100"
        >
            <Card
                className="h-100 shadow-sm border-secondary-subtle overflow-hidden cursor-pointer transition-all border-0 shadow-hover"
                style={{ cursor: 'pointer' }}
            >
                {/* Container da Imagem */}
                <div className="overflow-hidden" style={{ height: "200px" }}>
                    <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-100 h-100 object-fit-cover transition-transform duration-500 hover-zoom"
                    />
                </div>

                <Card.Body className="d-flex flex-column p-4">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <Card.Title className="h5 mb-0 fw-bold text-dark">
                            {project.title}
                        </Card.Title>
                        <ExternalLink size={18} className="text-muted" />
                    </div>

                    <Card.Text className="text-muted small mb-3 flex-grow-1">
                        {project.description}
                    </Card.Text>

                    <div className="d-flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge
                                key={tag}
                                bg="light"
                                text="dark"
                                className="border font-weight-normal"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;