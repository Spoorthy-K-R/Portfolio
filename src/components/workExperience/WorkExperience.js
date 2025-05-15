import React, { useState, createRef, useContext} from "react";
import "./WorkExperience.css";
import {workExperiences} from "../portfolio";
import {Fade} from "react-awesome-reveal";
// import StyleContext from "../../contexts/StyleContext";
import ColorThief from "colorthief";

function ExperienceCard({cardInfo}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={"subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={ "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
             "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
             "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
             "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets}  />
        </ul>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const experience = workExperiences.experience;
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                
                {/* <div className="education-details">
                  <h2>{experience[selectedIndex].company}</h2>
                  <h3>{experience[selectedIndex].role}</h3>
                  <p className="education-duration">{experience[selectedIndex].date}</p>
                  {experience[selectedIndex].desc && <p className="education-bullets">{experience[selectedIndex].desc}</p>}
                </div>
                <div className="education-sidebar">
                  <div className="education-list">
                    <div className="vertical-line" />
                    {workExperiences.experience.map((card, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`education-item ${index === selectedIndex ? "active" : ""}`}
                      >
                        {card.company}
                      </div>
                    ))}
                  </div>
                </div> */}
                
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      // isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}