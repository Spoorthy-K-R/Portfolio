import "./Education.css";
// import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../portfolio";
import React, {createRef} from "react";
import {Fade, Slide} from "react-awesome-reveal";
import degree from "../../assets/lottie/degree";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

// import StyleContext from "../../contexts/StyleContext";

function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  // const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                   "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}

export default function Education() {
  if (educationInfo.display) {
    return (
    //   <div className="education-content">
    //   <div className="education-card-container">
    //     {educationInfo.schools.map((school, index) => (
    //       <EducationCard key={index} school={school} />
    //     ))}
    //   </div>
    //   <div className="education-animation">
    //     <DisplayLottie animationData={degree} />
    //   </div>
    // </div>


    <div className="education-section"> 
      <h1 className="education-heading">Education</h1>
      <div className="education-content" id="education">
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
        {/* <div className="education-animation">
          <DisplayLottie animationData={degree} />
        </div> */}
      </div>
      </div>
    );
  }
  return null;
}
