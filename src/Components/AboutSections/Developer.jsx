import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import test from "../../Assets/travel4.png";
import Footer from "../Footer";
import NavBar from "../NavBar";

export default function Developer() {
  return (
    <Container className="border border-2">
      <Row className="border border-2">
        <Col lg={12}>
          <NavBar />
        </Col>

        <Col className="border border-2" lg={12}>
          ¿Quien creo este sitio web?
        </Col>
        <Col lg={6}>
          <Image src={test} fluid />
        </Col>
        <Col lg={6}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
          deserunt quae. Modi perspiciatis beatae dignissimos. Necessitatibus,
          dolores! Odio nihil placeat accusamus rerum eos quo rem incidunt!
          Numquam maiores accusantium sequi?
        </Col>

        <Col lg={12}>Que tecnologias fueron usadas?</Col>
        <Col lg={12}>
          Lista de tecnologias:
          ejemplo,ejemplo,ejemplo,ejemplo,ejemplo,ejemplo,ejemplo,
        </Col>
        <Col lg={12} className="fixed-bottom">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
