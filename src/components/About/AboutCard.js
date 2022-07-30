import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saikiran Kopparthi </span>
            from <span className="purple"> Kakinada, India.</span>
            <br />I recently got graduated from B. Tech in stream of Information Technology with 🥇 Gold Medal
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading News Feed
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't let the past affect your present!"{" "}
          </p>
          <footer className="blockquote-footer">Saikiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
