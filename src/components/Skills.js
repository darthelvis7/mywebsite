import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaNodeJs, FaWordpress, FaFigma } from "react-icons/fa";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

const Skills = () => {
  return (
    <div className="skills">
      <h3>SKILLS</h3>
      <div className="skill-icons">
        <div className="skill">
          <FaHtml5 className="icon html5" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon css3" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaJsSquare className="icon js" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact className="icon react" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaDatabase className="icon mongo" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <FaNodeJs className="icon node" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <FaWordpress className="icon wordpress" />
          <p>WordPress</p>
        </div>
        <div className="skill">
          <DiPhotoshop className="icon photoshop" />
          <p>Photoshop</p>
        </div>
        <div className="skill">
          <DiIllustrator className="icon illustrator" />
          <p>Illustrator</p>
        </div>
        <div className="skill">
          <FaFigma className="icon figma" />
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
