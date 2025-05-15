import React, { useState, createRef, useContext} from "react";
import "./Education.css";
import {educationInfo} from "../portfolio";
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

  // const getColorArrays = (imgElement) => {
  //   Vibrant.from(imgElement)
  //     .getPalette()
  //     .then((palette) => {
  //       const rgb = palette.Vibrant.rgb;
  //       setColorArrays(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
  //     })
  //     .catch(console.error);
  // };

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
    const schools = educationInfo.schools;
  if (educationInfo.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="education">
            <div>
              <h1 className="experience-heading">Education</h1>
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
                
                {schools.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      // isDark={isDark}
                      cardInfo={{
                        company: card.schoolName,
                        desc: card.desc,
                        date: card.duration,
                        companylogo: card.logo,
                        role: card.subHeader,
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