import "./WorkExperience.css";
// import EducationCard from "../../components/educationCard/EducationCard";
import {workExperiences} from "../portfolio";
import React, {createRef, useState} from "react";
import {Fade, Slide} from "react-awesome-reveal";
import degree from "../../assets/lottie/degree";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

// import StyleContext from "../../contexts/StyleContext";

// function EducationCard({school}) {
//   const imgRef = createRef();

//   const GetDescBullets = ({descBullets}) => {
//     return descBullets
//       ? descBullets.map((item, i) => (
//           <li key={i} className="subTitle">
//             {item}
//           </li>
//         ))
//       : null;
//   };
//   // const {isDark} = useContext(StyleContext);

//   if (!school.logo)
//     console.error(`Image of ${school.name} is missing in education section`);
//   return (
//     <div>
//       <Fade left duration={1000}>
//         <div className="education-card">
//           {school.logo && (
//             <div className="education-card-left">
//               <img
//                 crossOrigin={"anonymous"}
//                 ref={imgRef}
//                 className="education-roundedimg"
//                 src={school.logo}
//                 alt={school.schoolName}
//               />
//             </div>
//           )}
//           <div className="education-card-right">
//             <h5 className="education-text-school">{school.schoolName}</h5>

//             <div className="education-text-details">
//               <h5
//                 className={
//                    "education-text-subHeader"
//                 }
//               >
//                 {school.subHeader}
//               </h5>
//               <p
//                 className={`${
//                   ""
//                 } education-text-duration`}
//               >
//                 {school.duration}
//               </p>
//               <p className="education-text-desc">{school.desc}</p>
//               <div className="education-text-bullets">
//                 <ul>
//                   <GetDescBullets descBullets={school.descBullets} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fade>
//       <Slide left duration={2000}>
//         <div className="education-card-border"></div>
//       </Slide>
//     </div>
//   );
// }

export default function Education() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const experiences = workExperiences.experience;
    return (
      <div className="education-section" id="experience"> 
      <h1 className="education-heading">Work Experience</h1>
      <div className="education-container">
        <div className="education-sidebar">
            <div className="education-list">
              <div className="vertical-line" />
              {experiences.map((comp, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`education-item ${index === selectedIndex ? "active" : ""}`}
                >
                  {/* <img
                    src={comp.companylogo}
                    alt={comp.company}
                    className="education-logo"
                  /> */}
                  {comp.company}
                </div>
              ))}
            </div>
          </div>
          <div className="education-details">
            <h2>{experiences[selectedIndex].company}</h2>
            <h3>{experiences[selectedIndex].role}</h3>
            <p className="education-duration">{experiences[selectedIndex].date}</p>
            {experiences[selectedIndex].desc && (
              <ul className="education-bullets">
                {experiences[selectedIndex].desc.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
            {/* {schools[selectedIndex].descBullets.length > 0 && (
              <p className="education-bullets">
                {schools[selectedIndex].descBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </p>
            )} */}
          </div>
        </div>
      </div>

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


    // <section className="education-section"> 
    //   <h1 className="education-heading">Education</h1>
    //   <div className="education-content" id="education">
    //     <div className="education-card-container">
    //       {educationInfo.schools.map((school, index) => (
    //         <EducationCard key={index} school={school} />
    //       ))}
    //     </div>
    //   </div>
    //   </section>
)
}
