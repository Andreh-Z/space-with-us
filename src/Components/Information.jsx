import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AstroLost1 from "../Assets/astro-lost1.jpg";
import AstroCarousel from "./AstroCarousel";
import NavBar from "./NavBar";
import TableInformation from "./TableInformation";
import { motion } from "framer-motion";

export default function Information() {
  const text =
    "Here are really usefull information if you want to travel with us!";
  const characters = text.split("");

  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col lg={12}>
          <NavBar />
        </Col>
        <Row id="information-bg" className="rounded mb-2 mt-2">
          <Col lg={12} className="text-center mt-2">
            <h1 id="title">Whoa, hold on there, moon cowboy.</h1>
            <h3 id="text1">
              First of all, there are many things you need to know before your
              trip to space.
            </h3>
            <p id="text1">You don't want to end like this, are you?</p>
            <Image
              src={AstroLost1}
              fluid
              style={{ height: "600px" }}
              rounded
              className="shadow-lg m-3"
              alt="astronaut-lost-in-the-space"
            />
            <br />
            <small id="text" className="bg-black">
              Yes! This is a totally real astronaut who got lost in space
              because they didn't read the signs on this website. Can you
              believe it?
            </small>
          </Col>
          <Col lg={12} className="text-center mt-5">
            <h3 id="title" style={{ textShadow: "4px 4px 2px rgba(0,0,0,1)" }}>
              We know you're anxious to travel, so here are some pictures of our
              latest travelers.
            </h3>
            <p
              id="text1"
              className="fs-5"
              style={{ textShadow: "4px 4px 2px rgba(0,0,0,1)" }}
            >
              If anyone asks where they are now, we don't know either! Just
              kidding, they're probably having a blast exploring the cosmos
              <small className="text-muted">
                <strong>or maybe not...</strong>
              </small>
            </p>
          </Col>
          <Col lg={12} className="d-flex justify-content-center mt-5 mb-5 ">
            <AstroCarousel />
          </Col>
        </Row>
        <hr />
        <Col lg={12} className="text-center mb-5 mt-5" id="title">
          <h1>
            {characters.map((character, index) => (
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                key={index}
              >
                {character}
              </motion.span>
            ))}
          </h1>
        </Col>
        <hr />
        <Col lg={12} className="p-5" id="table-container">
          <TableInformation />
        </Col>
      </Row>
    </Container>
  );
}
