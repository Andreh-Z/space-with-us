import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <button>About us</button>
          </Col>
          <Col>
            <button>Home</button>
          </Col>
          <Col>
            <button>Landing</button>
          </Col>
          <Col>
            <button>Developer</button>
          </Col>
          <Col>
            <button>Contact</button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Follow us on social media:
              <a href="http://twitter.com">
                <FaTwitter />
              </a>
              <a href="http://twitter.com">
                <FaFacebook />
              </a>
              <a href="http://twitter.com">
                <FaInstagram />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
