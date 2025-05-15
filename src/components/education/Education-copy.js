import React, { useState } from "react";
import "./WorkMenu.css";
import {educationInfo} from "../portfolio";
import {Fade} from "react-awesome-reveal";

function WorkMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const schools = educationInfo.schools;

  return (
    <div className="education-section"> 
      <h1 className="education-heading">Education</h1>
      <div className="education-container">
        <div className="education-sidebar">
            <div className="education-list">
              <div className="vertical-line" />
              {schools.map((school, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`education-item ${index === selectedIndex ? "active" : ""}`}
                >
                  {/* <img
                    src={school.logo}
                    alt={school.schoolName}
                    className="education-logo"
                  /> */}
                  {school.schoolName}
                </div>
              ))}
            </div>
          </div>
          <div className="education-details">
            <h2>{schools[selectedIndex].schoolName}</h2>
            <h3>{schools[selectedIndex].subHeader}</h3>
            <p className="education-duration">{schools[selectedIndex].duration}</p>
            {schools[selectedIndex].desc && <p className="education-bullets">{schools[selectedIndex].desc}</p>}
            {schools[selectedIndex].descBullets.length > 0 && (
              <p className="education-bullets">
                {schools[selectedIndex].descBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>

      // 

//       <section class="section experience">
//   <div class="section__title">Experience</div>
//   <div class="section__content">
//     <div class="jobs">
//     {schools.map((school, index) => (
//       <div class="job">
//         <div class="time-place">
//           <div class="job__company">
//             <a href="{{job.url}}" target="_blank">{school.schoolName}</a>
//           </div>
//           {/* <div class="job__time">{{job.time}}</div> */}
//         </div>
//         {/* <div class="job__position">{{job.position}}</div> */}
//       </div>
//       ))}
//     </div>
//   </div>
// </section>
  );
}

export default WorkMenu;
