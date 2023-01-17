import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./FullName.css";

const FullName = () => {
  return (
    <div className="Name-me">
      <ListGroup>
        <ListGroup.Item>First Name :   Tarek</ListGroup.Item>
        <ListGroup.Item>Last Name: Essid</ListGroup.Item>
        <ListGroup.Item>Email : tarekpp464@gmail.com</ListGroup.Item>
        <ListGroup.Item>Facebook : Tarek Essid</ListGroup.Item>
        <ListGroup.Item>GitHub : dominikdiop</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FullName;
