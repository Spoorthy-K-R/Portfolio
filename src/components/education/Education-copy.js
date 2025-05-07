import React, { useState } from "react";
import "./WorkMenu.css";
import {educationInfo} from "../portfolio";

function WorkMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const schools = educationInfo.schools;

  return (
    <div className="education-container">
      <div className="education-details">
        <h2>{schools[selectedIndex].schoolName}</h2>
        <h3>{schools[selectedIndex].subHeader}</h3>
        <p className="education-duration">{schools[selectedIndex].duration}</p>
        {schools[selectedIndex].desc && <p>{schools[selectedIndex].desc}</p>}
        {schools[selectedIndex].descBullets.length > 0 && (
          <ul>
            {schools[selectedIndex].descBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="education-sidebar">
        {schools.map((school, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`education-item ${index === selectedIndex ? "active" : ""}`}
          >
            <img
              src={school.logo}
              alt={school.schoolName}
              className="education-logo"
            />
            {school.schoolName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkMenu;
