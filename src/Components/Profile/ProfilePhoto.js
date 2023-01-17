import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PicProfile from "./PicProfile.jpg";
import "./ProfilePhoto.css";

const ProfilePhoto = () => {
  return (
    <div className="MyCard">
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={PicProfile} style={{borderRadius: "50%"}} />
        <Card.Body style={{ backgroundColor: "white" }}>
          <Card.Title style={{ backgroundColor: "white" }}>Tarek Essid</Card.Title>
          <Card.Text style={{ backgroundColor: "white" }}>
            Hello Everyone i am a web developer and am here to help you
          </Card.Text>
          <Button variant="primary" href="https://github.com/dominikdiop">
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilePhoto;
