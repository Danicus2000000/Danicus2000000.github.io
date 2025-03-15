import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/linkedinIcon.svg";
import navIcon2 from "../assets/img/github-mark.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: React.SetStateAction<string>) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="mailto:testertestington940@gmail.com?subject=Website%20-%20get%20in%20touch%20request&body=Hi%20there%2C%0A%0A%7BGive%20some%20request%20context%20here%7D%0A%0AFrom%2C%0A%7BYour%20name%20%2F%20Handle%7D%0A%0ASent%20from%20https%3A%2F%2Fdanicus2000000.github.io%2F"
                className={"navbar-link"}
              >
                Get in touch
              </Nav.Link>
              <Nav.Link href="/blog" className={"navbar-link"}>
                My blog
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Danicus2000000">
                  <img src={navIcon2} alt="GitHub" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/daniel-bulman-0b58161b6/">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
