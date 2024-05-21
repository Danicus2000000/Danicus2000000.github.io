import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import bleAttractionsImg from "../assets/img/Project Images/BLEAttractions.webp";
import bleAdminConsoleImg from "../assets/img/Project Images/BLEAdminConsole.webp";
import noImage from "../assets/img/Project Images/NoImage.webp";
import passwordCheckerImg from "../assets/img/Project Images/PasswordStrengthChecker.webp";
import posSystemImg from "../assets/img/Project Images/PosSystem.webp";
import clickertyCarrotsImg from "../assets/img/Project Images/clickertyCarrots.webp";
import memoryOfAGoldfishImg from "../assets/img/Project Images/MemoryOfAGoldfish.webp";
import pingPongImg from "../assets/img/Project Images/PingPong.webp";
import ping from "../assets/img/Project Images/Ping.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BLE Attractions",
      description: "Dissertation project, A mobile application to provide information about attractions in the area to tourists from bluetooth beacons. (Database deprecated)",
      imgUrl: bleAttractionsImg,
      urlJump: "https://github.com/Danicus2000000/BLEAttractions"
    },
    {
      title: "BLE Admin Console",
      description: "Dissertation project, An administrator console to manage the attractions in the BLE Attractions mobile application. (Database deprecated)",
      imgUrl: bleAdminConsoleImg,
      urlJump: "https://github.com/Danicus2000000/BLEAdminConsole"
    },
    {
      title: "NFC Reader",
      description: "A basic application that takes inbound NFC signals and displays the data on a mobile devices screen.",
      imgUrl: noImage,
      urlJump: "https://github.com/Danicus2000000/NFCReader"
    },
    {
      title: "Password strength checker",
      description: "A basic password strength checker.",
      imgUrl: passwordCheckerImg,
      urlJump: "https://github.com/Danicus2000000/Password-checker"
    },
    {
      title: "POS System",
      description: "A level NEA project, a POS system allowing for taking orders and the generation of receipts",
      imgUrl: posSystemImg,
      urlJump: "https://github.com/Danicus2000000/Pos-System"
    },
    {
      title: "Path searching algorithms",
      description: "A Program that allows you to run Brute Force, Dijkstra's and the A* algorithm on files of nodes to attempt to find the shortest path!",
      imgUrl: noImage,
      urlJump: "https://github.com/Danicus2000000/SoftwareEngineeringRoutesearch"
    }

  ];

  const gameProjects = [
    {
      title: "Clickerty Carrots",
      description: "A game about collecting carrots!",
      imgUrl: clickertyCarrotsImg,
      urlJump: "https://github.com/Danicus2000000/Clickerty-Carrots"
    },
    {
      title: "Memory Of A Goldfish",
      description: "A card matching game all about goldfish!",
      imgUrl: memoryOfAGoldfishImg,
      urlJump: "https://github.com/Danicus2000000/MemoryOfAGoldfish"
    },
    {
      title: "Ping pong",
      description: "A basic game of ping pong",
      imgUrl: pingPongImg,
      urlJump: "https://github.com/Danicus2000000/Ping-Pong"
    },
    {
      title: "Ping",
      description: "A game where the goal is to keep the ball in the air as long as possible.",
      imgUrl: ping,
      urlJump: "https://github.com/Danicus2000000/Ping"
    }
  ];

  const collaborationProjects = [
    {
      title: "Clickerty Carrots",
      description: "A game about collecting carrots!",
      imgUrl: clickertyCarrotsImg,
      urlJump: "https://github.com/Danicus2000000/Clickerty-Carrots"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here you can see all of my projects divided into personal projects, created games and collaboration projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          gameProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          collaborationProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
