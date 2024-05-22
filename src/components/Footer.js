import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/linkedinIcon.svg";
import navIcon2 from "../assets/img/github-mark.svg";
import cert1 from "../assets/img/microsoft-certified-associate-badge.svg";
import cert2 from "../assets/img/microsoft-certified-900-badge.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={6} sm={4}>
             <a href="/"><img src={logo} alt="Logo"/></a>
          </Col>
          <Col size={12} sm={8} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="https://github.com/Danicus2000000"><img src={navIcon2} alt="GitHub" /></a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/daniel-bulman-0b58161b6/"><img src={navIcon1} alt="LinkedIn" /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="badge-icon">
          <div className="badge-icon">
              <img src={cert2} alt="Microsoft Azure Fundamentals" />
              <img src={cert1} alt="Microsoft Developer Associate" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
