import { Container } from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} <span className={styles.footerName}>Bruno Calazans Carritilha</span>. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
