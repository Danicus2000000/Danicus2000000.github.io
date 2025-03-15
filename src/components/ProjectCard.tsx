import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";

type ProjectCardProps = {
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

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  urlJump: PropTypes.string.isRequired,
};
