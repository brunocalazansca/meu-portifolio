import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} <span className="footer-name">Seu Nome</span>. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
