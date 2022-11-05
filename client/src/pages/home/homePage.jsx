import React from "react";

import "./homePage.styles.scss";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
  return (
    <div className="homePage-container">
      <h2>Welcome to the Bo3 BLD Trainer</h2>
      <div className="home-card-group">
        <Row xs={2} md={2} lg={4} className="g-4">
          {CARD_INFO.map(({ title, description, img }, idx) => (
            <Col>
              <Card className="card-container">
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
