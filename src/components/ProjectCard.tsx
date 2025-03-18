import { Col } from "react-bootstrap";

export type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  urlJump: string;
};

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  urlJump,
}: ProjectCardProps) => {
  return (
    <Col size={12} sm={6} md={3} className="proj-colbx">
      <a href={urlJump}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
