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

  /**
   * Updates the active link.
   * @param value The value to update the active link to.
   * @returns void
   */
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
                href="mailto:&#x74;&#x65;&#x73;&#x74;&#x65;&#x72;&#x74;&#x65;&#x73;&#x74;&#x69;&#x6e;&#x67;&#x74;&#x6f;&#x6e;&#x39;&#x34;&#x30;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;&#x3f;&#x73;&#x75;&#x62;&#x6a;&#x65;&#x63;&#x74;&#x3d;&#x57;&#x65;&#x62;&#x73;&#x69;&#x74;&#x65;&#x25;&#x32;&#x30;&#x2d;&#x25;&#x32;&#x30;&#x67;&#x65;&#x74;&#x25;&#x32;&#x30;&#x69;&#x6e;&#x25;&#x32;&#x30;&#x74;&#x6f;&#x75;&#x63;&#x68;&#x25;&#x32;&#x30;&#x72;&#x65;&#x71;&#x75;&#x65;&#x73;&#x74;&#x26;&#x62;&#x6f;&#x64;&#x79;&#x3d;&#x48;&#x69;&#x25;&#x32;&#x30;&#x74;&#x68;&#x65;&#x72;&#x65;&#x25;&#x32;&#x43;&#x25;&#x30;&#x41;&#x25;&#x30;&#x41;&#x25;&#x37;&#x42;&#x47;&#x69;&#x76;&#x65;&#x25;&#x32;&#x30;&#x73;&#x6f;&#x6d;&#x65;&#x25;&#x32;&#x30;&#x72;&#x65;&#x71;&#x75;&#x65;&#x73;&#x74;&#x25;&#x32;&#x30;&#x63;&#x6f;&#x6e;&#x74;&#x65;&#x78;&#x74;&#x25;&#x32;&#x30;&#x68;&#x65;&#x72;&#x65;&#x25;&#x37;&#x44;&#x25;&#x30;&#x41;&#x25;&#x30;&#x41;&#x46;&#x72;&#x6f;&#x6d;&#x25;&#x32;&#x43;&#x25;&#x30;&#x41;&#x25;&#x37;&#x42;&#x59;&#x6f;&#x75;&#x72;&#x25;&#x32;&#x30;&#x6e;&#x61;&#x6d;&#x65;&#x25;&#x32;&#x30;&#x25;&#x32;&#x46;&#x25;&#x32;&#x30;&#x48;&#x61;&#x6e;&#x64;&#x6c;&#x65;&#x25;&#x37;&#x44;&#x25;&#x30;&#x41;&#x25;&#x30;&#x41;&#x53;&#x65;&#x6e;&#x74;&#x25;&#x32;&#x30;&#x66;&#x72;&#x6f;&#x6d;&#x25;&#x32;&#x30;&#x68;&#x74;&#x74;&#x70;&#x73;&#x25;&#x33;&#x41;&#x25;&#x32;&#x46;&#x25;&#x32;&#x46;&#x64;&#x61;&#x6e;&#x69;&#x63;&#x75;&#x73;&#x32;&#x30;&#x30;&#x30;&#x30;&#x30;&#x30;&#x2e;&#x67;&#x69;&#x74;&#x68;&#x75;&#x62;&#x2e;&#x69;&#x6f;&#x25;&#x32;&#x46;"
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
