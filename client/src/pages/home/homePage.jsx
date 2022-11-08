import React from "react";
import { useState } from "react";

import "./homePage.styles.scss";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useNavigate } from "react-router-dom";

const CARD_INFO = [
  {
    title: "BLD",
    description:
      "Practice BLD doing a full scrambled cube, how much harder the scramble, the better!",
    img: "assets/scramble-icon.png",
  },
  {
    title: "EDGES",
    description:
      "Practice BLD doing an edges-only scrambled cube, good to practice this part of bld solving!",
    img: "assets/edges-icon.png",
  },
  {
    title: "CORNERS",
    description:
      "Practice BLD doing an corners-only scrambled cube, good to practice this part of bld solving!",
    img: "assets/corners-icon.png",
  },
  {
    title: "MBLD",
    description:
      "Practice MBLD, try how many cubes you can, how much, the better!",
    img: "assets/mbld.jpg",
  },
];

const HomePage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCardNavigation = (route) => {
    navigate("/" + route.toLowerCase());
  };

  return (
    <div className="homePage-container">
      <h2>Welcome to the Bo3 BLD Trainer</h2>
      <Button className="button-style" onClick={handleShow}>
        About the Bo3 Method
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bo3 Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The Best of 3 (Bo3) method, was developed by Elliott Kobelansky, the
          idea is to practice with an average of 3 solves like in a competition.
          This timer has sessions with 5 Bo3 or 10 Bo3, in each Bo3 pick up the
          fast solve to do the average of that session.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="home-card-group">
        <Row xs={2} md={2} lg={4} className="g-4">
          {CARD_INFO.map(({ title, description, img }, idx) => (
            <Col key={idx}>
              <Card
                onClick={() => handleCardNavigation(title)}
                className="card-container"
              >
                <div className="img-container">
                  <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
