import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Flights() {
  const [years, setYears] = useState(99);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const interval = useRef();
  const [showModal, setShowModal] = useState(false);
  const [alertVariant, setAlertVariant] = useState("danger");

  // Use the useHistory hook to get access to the history object
  // which you can use to navigate to other routes
  const history = useNavigate();

  function tick() {
    setSeconds(seconds - 1);

    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }

    if (minutes === 0) {
      setHours(hours - 1);
      setMinutes(59);
    }

    if (hours === 0) {
      setDays(days - 1);
      setHours(23);
    }

    if (days === 0) {
      setMonths(months - 1);
      setDays(30);
    }

    if (months === 0) {
      setYears(years - 1);
      setMonths(11);
    }

    if (
      years === 0 &&
      months === 0 &&
      days === 0 &&
      hours === 0 &&
      minutes === 0 &&
      seconds === 0
    ) {
      clearInterval(interval.current);
    }
  }

  useEffect(() => {
    interval.current = setInterval(tick, 1000);

    return () => clearInterval(interval.current);
  }, [seconds]);

  function handleClick() {
    setAlertVariant("danger");
    setShowModal(true);
    setTimeout(() => {
      history("/");
    }, 5000);
  }

  return (
    <Container fluid id="coming-soon">
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Liar detected!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant={alertVariant}>
            Why are you lying to us? We know you are not capable of flying a
            spaceship. Better go check out the rest of the site.{" "}
          </Alert>
        </Modal.Body>
      </Modal>
      <Row lg={1}>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1 className="text-uppercase mt-5" id="title">
              We are working here!
            </h1>
            <h3>You can't fly with us yet</h3>
            <small className="text-white fs-4" id="text">
              Unless you know how to fly a spaceship...do you know how to do
              that?
            </small>
          </div>
          <div className="mt-5">
            <h1 id="text1" className="text-dark">
              Then you'll have to wait until our pilots return from their last
              trip
            </h1>
            <hr />
            <br />
            <motion.p className="h1 font-weight-bold" animate={{ scale: 1.2 }}>
              Time elapsed: {years} years, {months} months, {days} days, {hours}{" "}
              hours, {minutes} minutes, {seconds} seconds
            </motion.p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center mt-5 gap-5">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            id="button1"
            style={{
              backgroundColor: hover ? "red" : "green",
              padding: "15px",
              border: "transparent",
              borderRadius: "20px",
              color: "white",
              textTransform: "uppercase",
            }}
            onClick={handleClick}
          >
            I know how to fly a spaceship
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setHover2(true)}
            onHoverEnd={() => setHover2(false)}
            id="button1"
            style={{
              backgroundColor: hover2 ? "green" : "orange",
              padding: "20px",
              border: "transparent",
              borderRadius: "20px",
              color: hover2 ? "white" : "purple",
              textTransform: "uppercase",
            }}
          >
            <Link className="text-decoration-none text-white" to="/">
              No, I don't know how to fly a spaceship
            </Link>
          </motion.button>
        </Col>
      </Row>
    </Container>
  );
}
