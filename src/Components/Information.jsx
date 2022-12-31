import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import AstroLost1 from "../Assets/astro-lost1.jpg";
import AstroCarousel from "./AstroCarousel";
import Sidebar from "./Sidebar";
import TableInformation from "./TableInformation";

export default function Information() {
  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col>
          <Sidebar />
        </Col>
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
          <small id="text">
            Yes! This is a totally real astronaut who got lost in space because
            they didn't read the signs on this website. Can you believe it?{" "}
          </small>
        </Col>
        <Col lg={12} className="text-center mt-5">
          <h3 id="title">
            We know you're anxious to travel, so here are some pictures of our
            latest travelers.
          </h3>
          <p id="text1">
            If anyone asks where they are now, we don't know either! Just
            kidding, they're probably having a blast exploring the cosmos
            <small class="text-muted"> or maybe not...</small>
          </p>
        </Col>
        <Col lg={12} className="d-flex justify-content-center mt-5 mb-5 ">
          <AstroCarousel />
        </Col>
        <hr />
        <Col lg={12} className="mt-5">
          <TableInformation />
        </Col>
      </Row>
    </Container>
  );
}
