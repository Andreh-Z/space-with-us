import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaTwitter, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { RxLaptop } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";
import { useState } from "react";

import logo from "../Assets/logo.png";

function ListItem({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  // Update the hovered state when the mouse enters or leaves the list item
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? "purple" : "transparent",
        padding: "5px",
        border: "transparent",
        borderRadius: "20px",
      }}
    >
      {children}
    </motion.li>
  );
}

function Footer() {
  return (
    <Container fluid id="footer">
      <Row className="d-flex align-items-center ms-2">
        <Col>
          <Image src={logo} width="200px" roundedCircle />
        </Col>
        <Col>
          <h1>Short Cuts</h1>
          <ul id="lista">
            <ListItem>
              <Link to="/error">Error Page</Link>
            </ListItem>
            <ListItem>
              <Link>Disabled Log In</Link>
            </ListItem>
            <ListItem>
              <Link>Disabled Register</Link>
            </ListItem>
            <ListItem>
              <Link>Wrong Route Page</Link>
            </ListItem>
          </ul>
        </Col>
        <Col>
          <h1>Developer</h1>
          <ul className="text-white" id="lista">
            <ListItem>
              <a
                className="text-white"
                href="https://www.linkedin.com/in/maxi-zeballos/"
              >
                <FaLinkedin />
                &nbsp;&nbsp;My LinkedIn
              </a>
            </ListItem>
            <ListItem>
              <FaTwitter />
              &nbsp;&nbsp;There is no twitter ☹
            </ListItem>
            <ListItem>
              <a
                className="text-white"
                href="https://andreh-z.github.io/react-portfolio/"
              >
                <RxLaptop />
                &nbsp;&nbsp;Personal Site
              </a>
            </ListItem>
            <ListItem>
              <a className="text-white" href="https://github.com/Andreh-Z">
                <FaGithubSquare />
                &nbsp;&nbsp;My GitHub Profile
              </a>
            </ListItem>
            <ListItem>
              <a
                className="text-white"
                href="https://github.com/Andreh-Z/space-with-us"
              >
                <FaGithubSquare />
                &nbsp;&nbsp;Repository of the project
              </a>
            </ListItem>
          </ul>
        </Col>
        <Col>
          <h1>Company</h1>
          <ul id="lista">
            <ListItem>
              <FiMapPin />
              &nbsp;&nbsp;Star Street 123, Space Coast
            </ListItem>
            <ListItem>
              <FiMail />
              &nbsp;&nbsp;info@spacewithus.com
            </ListItem>
            <ListItem>
              <BsFillPersonFill />
              &nbsp;&nbsp;Jhon W. Rocket
            </ListItem>
            <ListItem>
              <BiRocket />
              &nbsp;&nbsp;Space With US
            </ListItem>
            <ListItem>
              <FiPhoneCall />
              &nbsp;&nbsp;+1 555 123 4567
            </ListItem>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
