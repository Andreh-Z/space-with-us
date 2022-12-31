import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Image } from "react-bootstrap";
import aboutbg from "../../Assets/aboutbg-1.png";
import aboutbg1 from "../../Assets/aboutbg-2.png";
import "../../index.css";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Company() {
  return (
    <Container fluid className="bg-dark text-light min-vh-100 overflow-hidden">
      <Row>
        <Col lg={12}>
          <NavBar />
        </Col>
        <Col lg={6} className="mt-3 textContainer">
          <div className="text-center m-2" id="title">
            <h1>About Us</h1>
            <h4>Questions</h4>
          </div>
          <div className="olStyle fs-4" id="text1">
            <AnimatePresence>
              <motion.ol animate={{ x: 0 }}>
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 1 }}
                  animate={{ x: 0 }}
                >
                  What is the history of our company and how did we become
                  leaders in the space flight industry?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 2 }}
                  animate={{ x: 0 }}
                >
                  What are our values and goals as a company?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 3 }}
                  animate={{ x: 0 }}
                >
                  What kind of technology and systems do we use in our space
                  flights?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 4 }}
                  animate={{ x: 0 }}
                >
                  What are our main areas of research and development?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 5 }}
                  animate={{ x: 0 }}
                >
                  What are the most popular destinations for our space flights
                  and what do we offer to our passengers?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 6 }}
                  animate={{ x: 0 }}
                >
                  How do we work with space agencies and government
                  organizations internationally?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 7 }}
                  animate={{ x: 0 }}
                >
                  What are our main social responsibility initiatives and how do
                  we contribute to the development of the space industry?
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: -1000 }}
                  transition={{ duration: 8 }}
                  animate={{ x: 0 }}
                >
                  What are our future plans and how are we driving progress in
                  space exploration?
                </motion.li>
                <br />
              </motion.ol>
            </AnimatePresence>
          </div>
          <Image src={aboutbg} fluid className="imagen-about" />
        </Col>
        <Col lg={6} className="mt-3 textContainer">
          <div className="text-center m-2" id="title">
            <h1>About Us</h1>
            <h4>Answers</h4>
          </div>
          <div className="olStyle shadow-lg" id="text1">
            <AnimatePresence>
              <motion.ol animate={{ x: 0 }} duration={5000}>
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 1 }}
                  animate={{ x: 0 }}
                >
                  Our company was founded in 2005 by a group of visionary
                  entrepreneurs who saw the potential for commercial space
                  flight. Since then, we have consistently been at the forefront
                  of the industry, developing innovative technologies and
                  expanding our fleet of spacecraft.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 2 }}
                  animate={{ x: 0 }}
                >
                  At our company, we value innovation, safety, and customer
                  satisfaction above all else. Our goal is to make space travel
                  accessible and enjoyable for everyone, while also pushing the
                  boundaries of what is possible in terms of exploration and
                  research.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 3 }}
                  animate={{ x: 0 }}
                >
                  We use state-of-the-art technologies in all of our space
                  flights, including advanced propulsion systems, sophisticated
                  navigation systems, and reliable life support systems. Our
                  spacecraft are designed to handle the rigors of space travel
                  and provide a comfortable experience for our passengers.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 4 }}
                  animate={{ x: 0 }}
                >
                  Our research and development efforts are focused on improving
                  the efficiency and capabilities of our spacecraft, as well as
                  exploring new frontiers in space exploration. We are
                  constantly looking for ways to innovate and advance the
                  industry.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 5 }}
                  animate={{ x: 0 }}
                >
                  Our space flights offer a variety of destinations, including
                  low Earth orbit, the Moon, and beyond. We offer a range of
                  options for our passengers, including luxury space hotel stays
                  and space sightseeing tours.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 6 }}
                  animate={{ x: 0 }}
                >
                  We have strong partnerships with space agencies and government
                  organizations around the world, and we work closely with them
                  to advance the field of space exploration.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 7 }}
                  animate={{ x: 0 }}
                >
                  As a company, we believe in giving back to the community and
                  doing our part to support the development of the space
                  industry. Some of our main social responsibility initiatives
                  include supporting STEM education programs and conducting
                  research that benefits society.
                </motion.li>
                <br />
                <motion.li
                  initial={{ x: 1000 }}
                  transition={{ duration: 8 }}
                  animate={{ x: 0 }}
                >
                  Our future plans include expanding our fleet of spacecraft and
                  continuing to push the boundaries of space exploration. We are
                  committed to driving progress in the industry and making space
                  travel a reality for everyone.
                </motion.li>
                <br />
              </motion.ol>
            </AnimatePresence>
          </div>
          <Image src={aboutbg1} fluid className="imagen-about" />
        </Col>
      </Row>
    </Container>
  );
}
