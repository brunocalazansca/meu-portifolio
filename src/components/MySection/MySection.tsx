import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import profileImg from "@/assets/profile-placeholder.jpg";

const MySection = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center py-5">
            <Container>
                <Row className="align-items-center flex-column-reverse flex-lg-row g-5">

                    {/* Texto e Conteúdo */}
                    <Col lg={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-center text-lg-start"
                        >
                            <p className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: '0.15rem', fontSize: '0.85rem' }}>
                                Olá, eu sou
                            </p>

                            <h1 className="display-3 fw-bold text-dark mb-3">
                                Seu Nome
                            </h1>

                            <p className="h3 text-secondary fw-normal mb-4">
                                Desenvolvedor Full Stack
                            </p>

                            <p className="text-muted fs-5 mb-5 mx-auto mx-lg-0" style={{ maxWidth: '500px' }}>
                                Criando experiências digitais modernas e escaláveis com foco em performance e design.
                            </p>

                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="d-inline-flex align-items-center gap-2 px-4 shadow-sm"
                                >
                                    <Download size={18} />
                                    Baixar Currículo
                                </Button>

                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    className="d-inline-flex align-items-center gap-2 px-4"
                                >
                                    <Mail size={18} />
                                    Entrar em Contato
                                </Button>
                            </div>
                        </motion.div>
                    </Col>

                    {/* Imagem de Perfil */}
                    <Col lg={5} className="d-flex justify-content-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="position-relative"
                        >
                            {/* Moldura da Imagem */}
                            <div
                                className="position-relative z-1 overflow-hidden shadow-lg border border-primary border-opacity-10"
                                style={{
                                    width: 'min(100%, 320px)',
                                    aspectRatio: '1/1',
                                    borderRadius: '2rem',
                                }}
                            >
                                <Image
                                    src={profileImg}
                                    alt="Foto de perfil"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>

                            {/* Brilho/Efeito de Fundo (Gradient) */}
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 blur-3xl"
                                style={{
                                    filter: 'blur(50px)',
                                    transform: 'translate(10px, 10px)',
                                    zIndex: 0
                                }}
                            />
                        </motion.div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default MySection;