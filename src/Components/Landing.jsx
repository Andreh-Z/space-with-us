import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import astro from "../Assets/astro.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrow90DegLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Container fluid className="bg-dark text-light overflow-hidden">
      <Row>
        <Col lg={6} className="text-start m-0 p-0 ps-2 pt-2">
          <Image
            src={astro}
            alt="astro-in-the-space"
            style={{ height: "620px" }}
            className="shadow-lg"
            roundedCircle
          />
        </Col>

        <Col lg={6} className="text-start m-0 p-0 ps-2 pt-5">
          <AnimatePresence>
            <motion.div
              initial={{ x: "200%" }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              <IconContext.Provider
                value={{ size: "10rem", className: "global-class-name" }}
              >
                <BsArrow90DegLeft />
              </IconContext.Provider>
            </motion.div>
          </AnimatePresence>

          <div className="pt-5">
            <h1 id="title">
              This could be you, if you trusted us... well, maybe not exactly
              like this, but you get the idea!
            </h1>
          </div>
        </Col>

        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <Col
            lg={12}
            className="text-start mt-5 border border-2 shadow-lg shadow-white w-50 m-auto p-3 mb-5 rounded"
          >
            <h3 id="title" className="text-center">
              If you're on the fence about taking a trip to space in 2023, here
              are a few serious reasons why it might be a good idea:
            </h3>
            <br />
            <ol id="text">
              <li>
                Space is the final frontier... and also the ultimate Instagram
                backdrop. Imagine all the likes you'll get when you post a pic
                of yourself floating weightless in zero gravity!
              </li>
              <br />
              <li>
                You'll finally be able to answer the age-old question: "What do
                you do when you have to go to the bathroom in space?" (Note:
                this answer is not suitable for younger audiences).
              </li>
              <br />
              <li>
                You'll be able to say that you've been to space, which is way
                cooler than just saying you've been to space mountain.
              </li>
              <br />
              <li>
                You'll have the ultimate excuse for being late to work: "Sorry,
                I was stuck in orbit."
              </li>
              <br />
              <li>
                Imagine all the memes you could make about space travel. The
                possibilities are endless!
              </li>
              <br />
              <p className="fs-4" id="title">
                So if you're looking for a unique and memorable experience, and
                you have a good sense of humor, taking a trip to space in 2023
                might just be the perfect choice for you.
              </p>
            </ol>
          </Col>
        </motion.div>
        <Col lg={12} className="text-center mb-5 mt-5">
          <Button>
            <Link
              to="/information"
              className="text-white text-decoration-none fs-4"
            >
              Sounds Good, take me to the space!
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
