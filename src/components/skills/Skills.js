import React from "react";
import "./Skills.css";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../portfolio";
import {Fade, Slide, Zoom} from "react-awesome-reveal";
// import codingPerson from "../../assets/lottie/coding";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import StyleContext from "../../contexts/StyleContext";

function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div" >
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i class={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  // const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
      <div className="skills-main-div">
        {/* <Fade left duration={1000}> */}
          {/* <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Woman Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div> */}
        {/* </Fade> */}
        <Fade left duration={2000}>
          <div className="skills-text-div">
          {/* <Zoom duration={500}> */}
            <h1
              className={ "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            {/* </Zoom> */}
            <p
              className={
                 "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  // <Slide direction="left" delay={100} duration={800}>
                  <p
                    key={i}
                    className={"skills-text"}
                  >
                    {skills}
                  </p>
                  // </Slide>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
  );
}
