import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.webp";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const [, setIndex] = React.useState(1);
  const period = 2000;

  const tick = React.useCallback(() => {
    const toRotate = [
      ", Hello World!",
      ", getting more coffee",
      ", a Software Engineer",
      ", I'm trying my best",
      ", Learning as I go",
      ", I'm never giving up",
    ];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [isDeleting, loopNum, text.length]);
  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="txt-rotate-bounding-box">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {``}{" "}
                      <span className="txt-rotate" data-period="1000">
                        Hi i&apos;m Dan<span className="wrap">{text}</span>
                      </span>
                    </h1>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="An Ai rendition of Dan" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
