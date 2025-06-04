import "./WorkExperience.css";
// import EducationCard from "../../components/educationCard/EducationCard";
import {workExperiences} from "../portfolio";
import React, {createRef, useState, useEffect} from "react";
import {Fade, Slide, Zoom} from "react-awesome-reveal";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const experiences = workExperiences.experience;
  const [workAnimation, setWorkAnimation] = useState(true);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CompanyItem = ({ comp, index }) => {
    const content = (
      <div
        onClick={() => {setSelectedIndex(index); setWorkAnimation(false);}}
        className={`education-item ${index === selectedIndex ? "active" : ""}`}
      >
        {comp.company}
      </div>
    );

    return (workAnimation && windowWidth > 768) ? (
      <Slide direction="left" delay={index * 100} duration={800} key={index}>
        {content}
      </Slide>
      
    ) : content;
  };

  return (
    <div className="education-section" id="experience"> 
      {/* <Zoom duration={500}> */}
        <h1 className="education-heading">Work Experience</h1>
      {/* </Zoom> */}
      <div className="education-container">
        <div className="education-sidebar">
            <div className="education-list">
              <div className="vertical-line" />
              {experiences.map((comp, index) => (
                <CompanyItem key={index} comp={comp} index={index} />
              ))}
            </div>
          </div>
          <div className="education-details">
            {/* <Fade duration={1000}> */}
              <h2>{experiences[selectedIndex].company}</h2>
              <h3>{experiences[selectedIndex].role}</h3>
              <p className="education-duration">{experiences[selectedIndex].date}</p>
              {experiences[selectedIndex].desc && (
                <ul className="education-bullets">
                  {experiences[selectedIndex].desc.map((bullet, index) => (
                    // <Fade key={index} delay={index * 100} duration={200}>
                      <li>{bullet}</li>
                    // </Fade>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </div>
)
}
