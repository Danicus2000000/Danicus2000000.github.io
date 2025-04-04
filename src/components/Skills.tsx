import Carousel from "react-multi-carousel";

export const Skills = () => {
  /**
   * Responsive settings for the carousel.
   */
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  /**
   * List of skill values.
   */
  const skillValues: string[] = [
    "C#",
    "Python",
    "Azure DevOps",
    "Java",
    "C++",
    "Mobile Development",
    "Web Development",
    "Software Development",
    "YAML",
    "React",
    "Android Development",
    "F#",
    "SQL",
    "GraphQL",
    "TypeScript",
    "JavaScript",
    "GitHub Actions",
  ];

  /**
   * Formats the skill values into a card.
   */
  const formattedSkillValues: React.JSX.Element[] = skillValues.map(
    (skillValue, index) => {
      return (
        <div key={index} className="item">
          <h5>{skillValue}</h5>
        </div>
      );
    }
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>See below a list of my developed skills.</p>
              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                className="owl-carousel owl-theme skill-slider"
              >
                {formattedSkillValues}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
