import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";

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

  return (
    <Container fluid id="coming-soon">
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
          >
            I know how to fly a spaceship
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setHover2(true)}
            onHoverEnd={() => setHover2(false)}
            id="button1"
            style={{
              backgroundColor: hover2 ? "green" : "blue",
              padding: "15px",
              border: "transparent",
              borderRadius: "20px",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            I'll wait for the pilots
          </motion.button>
        </Col>
      </Row>
    </Container>
  );
}
