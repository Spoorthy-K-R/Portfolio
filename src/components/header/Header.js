import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
// import { Slide } from "react-awesome-reveal";
import {ReactTyped} from "react-typed";
// import Typing from 'react-typing-animation';
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  achievementSection,
  resumeSection
} from "../portfolio";

function Header() {
  // const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;
  
  return (
    <Headroom>
    <header className={"header"}>
    <a href="/Portfolio/" className="logo">
    <span className="grey-color"> &lt;</span>
    <span className="animated-text logo-name">
    <ReactTyped
    strings={[greeting.username]}
    typeSpeed={100}
    loop={false}
    />
    </span>
    <span className="grey-color">/&gt;</span>
    </a>
    
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label
    className="menu-icon"
    htmlFor="menu-btn"
    >
    <span className={"navicon"}></span>
    </label>
    <ul className={ "menu"}>
    {/* {viewSkills && (
      <li>
      <a href="#skills">Skills</a>
      </li>
    )} */}
    {viewExperience && (
      <li>
      <a href="#experience">Work Experiences</a>
      </li>
    )}
    {viewOpenSource && (
      <li>
      <a href="#contact">GitHub</a>
      </li>
    )}
    {viewAchievement && (
      <li>
      <a href="#achievements">Achievements</a>
      </li>
    )}
    {viewResume && (
      <li>
      <a href="#resume">Resume</a>
      </li>
    )}
    <li>
    <a href="#contact">Contact Me</a>
    </li>
    <li>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    {/* <a>
      <ToggleSwitch />
      </a> */}
      </li>
      </ul>
      </header>
      </Headroom>
    );
  }
  export default Header;
  