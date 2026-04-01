import { motion } from "framer-motion";
import { Container, Badge } from "react-bootstrap";

const techs = [
    "React", "TypeScript", "Node.js", "Next.js", "Bootstrap",
    "PostgreSQL", "Docker", "Git", "Python", "AWS", "MongoDB", "Figma",
];

const Tecnologias = () => {
    return (
        <section className="py-5 bg-light">
            <Container className="px-4">
                {/* Título com animação */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h3 fw-bold mb-5 text-dark"
                >
                    Tecnologias & Ferramentas
                </motion.h2>

                {/* Container das Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="d-flex flex-wrap gap-3"
                >
                    {techs.map((tech, i) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Badge
                                bg="white"
                                className="text-dark border py-3 px-4 fs-6 fw-medium shadow-sm tech-badge"
                                style={{
                                    cursor: 'default',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {tech}
                            </Badge>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default Tecnologias;