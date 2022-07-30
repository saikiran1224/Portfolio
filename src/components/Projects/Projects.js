import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gdscgmrit from "../../Assets/Projects/gdscgmrit.png";
import techshrine from "../../Assets/Projects/techshrine.png";
import patient from "../../Assets/Projects/patient.png";
import greenshakthi from "../../Assets/Projects/greenshakthi.png";
import bhijanforall from "../../Assets/Projects/bhojanforall.png";
import stumate from "../../Assets/Projects/stumate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenshakthi}
              isBlog={false}
              title="Green Shakthi Fuels"
              description="Android App that facilitates a platform to book Bio-Diesel which is delivered to customers home. It is built using Tech Stack Kotlin, Firebase, Glide, Lottie, Shared Prefs., Auth."
              ghLink="https://github.com/saikiran1224/Green_Sakthi_Android"
              demoLink="https://play.google.com/store/apps/details?id=com.greenshakthi.android"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techshrine}
              isBlog={false}
              title="Tech Shrine - Meet our Techies"
              description="This is a Flutter-based application that works on Android, iOS, Desktop, and Web Versions. The main intention of developing this app is to connect students in 1st and 2nd Years where they can communicate with students who are having domain knowledge referred to as Techies through Email ID, and Phone. This project is currently available on Play Store."
              ghLink="https://github.com/saikiran1224/Tech_Shrine"
              demoLink="https://play.google.com/store/apps/details?id=com.kirandroid.techshrine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdscgmrit}
              isBlog={false}
              title="GDSC GMRIT Connect"
              description="This app currently has 1K+ active users which is developed especially for students to get in connection with Google Developer Student Clubs and get notified about each and every event and also provide a platform to provide their ideas directly from the app. It is developed using Android with Kotlin, and Firebase as a Backend.This app currently has 1K+ active users which is developed especially for students to get in connection with Google Developer Student Clubs and get notified about each and every event and also provide a platform to provide their ideas directly from the app. It is developed using Android with Kotlin, and Firebase as a Backend."
              ghLink="https://github.com/saikiran1224/GDSC_GMRIT_App"
              demoLink="https://play.google.com/store/apps/details?id=com.gmrit.gdsc"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bhijanforall}
              isBlog={false}
              title="Bhojan for All - Donate Now Feed Many"
              description="This app is designed to combat the problem of Hunger present in our society. With a population of 1.3 billion, India is the world’s second-most populous country. Despite phenomenal Industrial, Economic growth, and being self-suffice to produce food to feed its population, it is unable to provide access to food to a large number of people, especially women and children."
              ghLink="https://github.com/saikiran1224/Bhojan_for_All"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patient}
              isBlog={false}
              title="Patient Monitoring System"
              description="Normally, there are days where we used to Wait for long times in the Hospital Waiting Halls unknowingly when we were called to the Doctor after taking an Appointment. This is an Android-based Application that automatically Predicts the Average Waiting Time a person needs to wait after his Appointment."
              ghLink="https://github.com/saikiran1224/Patient_Waiting_Time_Prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stumate}
              isBlog={false}
              title="Stumate - Start Succeeding Stop Seeking"
              description="Stumate is a realm for students who are willing to store all the Subject Files at a place. It acts like a Container and one can Filter Notes at any time with a Perfect Blend of Professionalism, We act as a Catalyst to bring the required change in the Society."
              ghLink="https://github.com/saikiran1224/Stumate"
              demoLink="https://play.google.com/store/apps/details?id=com.umang.stumate" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
