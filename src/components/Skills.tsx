import React from "react";

export function Skills() {
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

  const visibleCount = 3;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slideOffset, setSlideOffset] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const clampIndex = (value: number) => {
    const len = skillValues.length;
    return ((value % len) + len) % len;
  };

  const startSlide = (direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    const delta = direction === "next" ? 1 : -1;
    setSlideOffset(direction === "next" ? -33.333 : 33.333);
    setTimeout(() => {
      setCurrentIndex((prev) => clampIndex(prev + delta));
      setSlideOffset(0);
      setIsAnimating(false);
    }, 300);
  };

  const displayedSkills = Array.from({ length: visibleCount + 2 }).map(
    (_, i) => {
      const index = clampIndex(currentIndex + i - 1);
      return skillValues[index];
    },
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>See below a list of my developed skills.</p>

              <div
                className="skill-carousel"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <button
                  type="button"
                  className="skill-carousel__btn"
                  onClick={() => startSlide("prev")}
                  disabled={isAnimating}
                  aria-label="Previous skills"
                >
                  ◀
                </button>

                <div
                  className="skill-carousel__viewport"
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "1000px",
                  }}
                >
                  <div
                    className="skill-carousel__track"
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "stretch",
                      transform: `translateX(${slideOffset}%)`,
                      transition: isAnimating ? "transform 300ms ease" : "none",
                    }}
                  >
                    {displayedSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="skill-carousel__item"
                        style={{
                          flex: "0 0 33.333%",
                          padding: "1rem",
                          textAlign: "center",
                          borderRadius: "0.5rem",
                          background: "rgba(255,255,255,0.08)",
                          maxHeight: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h5 style={{ margin: 0 }}>{skill}</h5>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="skill-carousel__btn"
                  onClick={() => startSlide("next")}
                  disabled={isAnimating}
                  aria-label="Next skills"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
