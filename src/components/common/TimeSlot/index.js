import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Index = ({ time, onClick }) => {
  return (
    <Card data-testid="Timeslot" onClick={() => onClick(time)}>
      <Row>
        <Col xs lg="3">
          <Card.Title>{time}</Card.Title>
        </Col>
        <Col>Available</Col>
      </Row>
    </Card>
  );
};

export default Index;
