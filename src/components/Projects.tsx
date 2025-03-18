import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";
import NO_IMAGE_IMG from "../assets/img/Project Images/NoImage.webp";
import CLICKERTY_CARROTS_IMG from "../assets/img/Project Images/clickertyCarrots.webp";
import BLE_ATTRACTIONS_IMG from "../assets/img/Project Images/BLEAttractions.webp";
import BLE_ADMIN_CONSOLE_IMG from "../assets/img/Project Images/BLEAdminConsole.webp";
import PASSWORD_STRENGTH_CHECKER_IMG from "../assets/img/Project Images/PasswordStrengthChecker.webp";
import POS_SYSTEM_IMG from "../assets/img/Project Images/PosSystem.webp";
import MEMORY_OF_A_GOLDFISH_IMG from "../assets/img/Project Images/MemoryOfAGoldfish.webp";
import PING_PONG_IMG from "../assets/img/Project Images/PingPong.webp";
import PING_IMG from "../assets/img/Project Images/Ping.webp";

export const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "BLE Attractions",
      description:
        "Dissertation project, A mobile application to provide information about attractions in the area to tourists from bluetooth beacons. (Database deprecated)",
      imgUrl: BLE_ATTRACTIONS_IMG,
      urlJump: "https://github.com/Danicus2000000/BLEAttractions",
    },
    {
      title: "BLE Admin Console",
      description:
        "Dissertation project, An administrator console to manage the attractions in the BLE Attractions mobile application. (Database deprecated)",
      imgUrl: BLE_ADMIN_CONSOLE_IMG,
      urlJump: "https://github.com/Danicus2000000/BLEAdminConsole",
    },
    {
      title: "NFC Reader",
      description:
        "A basic application that takes inbound NFC signals and displays the data on a mobile devices screen.",
      imgUrl: NO_IMAGE_IMG,
      urlJump: "https://github.com/Danicus2000000/NFCReader",
    },
    {
      title: "Password strength checker",
      description: "A basic password strength checker.",
      imgUrl: PASSWORD_STRENGTH_CHECKER_IMG,
      urlJump: "https://github.com/Danicus2000000/Password-checker",
    },
    {
      title: "POS System",
      description:
        "A level NEA project, a POS system allowing for taking orders and the generation of receipts",
      imgUrl: POS_SYSTEM_IMG,
      urlJump: "https://github.com/Danicus2000000/Pos-System",
    },
    {
      title: "Path searching algorithms",
      description:
        "A Program that allows you to run Brute Force, Dijkstra's and the A* algorithm on files of nodes to attempt to find the shortest path!",
      imgUrl: NO_IMAGE_IMG,
      urlJump:
        "https://github.com/Danicus2000000/SoftwareEngineeringRoutesearch",
    },
  ];

  const gameProjects: ProjectCardProps[] = [
    {
      title: "Clickerty Carrots",
      description: "A game about collecting carrots!",
      imgUrl: CLICKERTY_CARROTS_IMG,
      urlJump: "https://github.com/Danicus2000000/Clickerty-Carrots",
    },
    {
      title: "Memory Of A Goldfish",
      description: "A card matching game all about goldfish!",
      imgUrl: MEMORY_OF_A_GOLDFISH_IMG,
      urlJump: "https://github.com/Danicus2000000/MemoryOfAGoldfish",
    },
    {
      title: "Ping pong",
      description: "A basic game of ping pong",
      imgUrl: PING_PONG_IMG,
      urlJump: "https://github.com/Danicus2000000/Ping-Pong",
    },
    {
      title: "Ping",
      description:
        "A game where the goal is to keep the ball in the air as long as possible.",
      imgUrl: PING_IMG,
      urlJump: "https://github.com/Danicus2000000/Ping",
    },
  ];

  const collaborationProjects: ProjectCardProps[] = [
    {
      title: "Clickerty Carrots",
      description: "A game about collecting carrots!",
      imgUrl: CLICKERTY_CARROTS_IMG,
      urlJump: "https://github.com/Danicus2000000/Clickerty-Carrots",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you can see all of my projects divided into personal
                    projects, created games and collaboration projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Games</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Collaborations</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {gameProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {collaborationProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
