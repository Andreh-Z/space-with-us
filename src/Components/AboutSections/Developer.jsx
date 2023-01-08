import React, { useMemo, useState } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import me from "../../Assets/me.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { Modal, Button } from "react-bootstrap";

import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiReactrouter, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

const Developer = () => {
  const text1 =
    "Greetings, my name is Maximiliano and I am 25 years of age. I hail from Uruguay and one of my hobbies is participating in sports and staying active through exercise. I am an animal lover and appreciate clean, well-designed interfaces that are easy to understand. I am always eager to learn and am willing to work hard in order to improve my skills and knowledge.";
  const text2 =
    "I am a native Spanish speaker with a high level of English, as evidenced by my C1 certification. In addition to my language skills, I have a strong background in programming and have extensive knowledge in JavaScript, React, NodeJS, and Express. I have completed several projects using these technologies,demonstrating my ability to develop high-quality software.";
  const text3 =
    "I possess a strong motivation and work ethic, with a passion for technology. I am a team player and possess strong communication and social skills. I believe that my combination of language skills, technical expertise, and determination make me a valuable asset to any team. I am excited to continue learning and developing my skills in order to make a positive contribution to any organization I am a part of. My long-term professional goal is to specialize in a specific area of software development and continue to grow and evolve as a developer.";

  const characters1 = useMemo(() => text1.split(""), []);
  const characters2 = useMemo(() => text2.split(""), []);
  const characters3 = useMemo(() => text3.split(""), []);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="bg-dark">
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tech descriptions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <li>
            <mark>React:</mark> React is a JavaScript library for building user
            interfaces. It allows developers to create reusable UI components
            and efficiently update and render components in response to data
            changes.
          </li>
          <li>
            <mark>React Router:</mark> React Router is a library for routing in
            React apps. It provides a simple way to declaratively define routes
            and navigate between them in a React app.
          </li>
          <li>
            <mark>Bootstrap:</mark> Bootstrap is a front-end framework for
            building responsive, mobile-first websites. It provides a set of
            pre-styled UI components and layout grids, as well as tools for
            creating custom styles and responsive design.
          </li>
          <li>
            <mark>Framer Motion:</mark> Framer Motion is a library for animating
            elements in a React app. It provides a declarative API for creating
            and controlling animations, as well as a set of pre-built animation
            components.
          </li>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container className="bg-dark text-light min-vh-100">
        <Row>
          <Col lg={12}>
            <NavBar />
          </Col>

          <Col className="border border-2 rounded" lg={12} id="title">
            <h1 className="text-center mt-3 mb-3"> Who created this site?</h1>
          </Col>
          <Col lg={6} className="d-flex align-items-center">
            <Image src={me} fluid rounded className="shadow-lg" />
          </Col>
          <Col
            lg={6}
            className="mt-2 text-start rounded d-flex shadow-lg align-items-center fs-5 border border-2"
            id="text1"
          >
            <span className="p-2">
              {characters1.map((character, index) => (
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                >
                  {character}
                </motion.span>
              ))}
              <br />
              <br />
              {characters2.map((character, index) => (
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                >
                  {character}
                </motion.span>
              ))}
              <br />
              <br />
              {characters3.map((character, index) => (
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  exit={{ x: 100, opacity: 0 }}
                >
                  {character}
                </motion.span>
              ))}
            </span>
          </Col>

          <Col lg={12} className="text-center border border-2 mt-5" id="title">
            <h1>What technologies have I used on this site?</h1>
          </Col>
          <Col lg={12} className="d-flex justify-content-around mt-3">
            <Button onClick={handleShow}>
              <FaReact size={60} className="text-light" />
            </Button>
            <Button onClick={handleShow}>
              <SiReactrouter size={60} className="text-light" />
            </Button>
            <Button onClick={handleShow}>
              <FaBootstrap size={60} className="text-light" />
            </Button>
            <Button onClick={handleShow}>
              <SiFramer size={60} className="text-light" />
            </Button>
          </Col>

          <Col lg={12} className="mt-5">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Developer;
