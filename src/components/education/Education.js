import React, { useState, createRef, useContext} from "react";
import "./Education.css";
import {educationInfo} from "../portfolio";
import ColorThief from "colorthief";
import 'react-vertical-timeline-component/style.min.css';
import {Fade, Zoom, Slide} from "react-awesome-reveal";


const CustomVerticalTimeline = ({ events }) => {
  return (
    <div className="timeline-container">
      <Slide direction="right" delay={100} duration={800}>
      {events.map((card, index) => (
        <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
        <div className="timeline-icon">
          <img src={card.logo} alt={card.schoolName} style={{ width: 32, height: 32, borderRadius: "50%" }} />
        </div>
      
        {index % 2 === 0 ? (
          <>
            <div className="timeline-content">
              <h3 className="timeline-title">{card.schoolName}</h3>
              <h4 className="timeline-subtitle">{card.subHeader}</h4>
              <p>{card.desc}</p>
              {card.descBullets && (
                <ul>
                  {card.descBullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
            <span className="timeline-date opposite">{card.duration}</span>
          </>
        ) : (
          <>
            <span className="timeline-date opposite">{card.duration}</span>
            <div className="timeline-content">
              <h3 className="timeline-title">{card.schoolName}</h3>
              <h4 className="timeline-subtitle">{card.subHeader}</h4>
              <p>{card.desc}</p>
              {card.descBullets && (
                <ul>
                  {card.descBullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
      ))}
      </Slide>
    </div>
  );
};

export default function WorkExperience() {
  const schools = educationInfo.schools;

  if (educationInfo.display) {
    return (

      <div id="education">
        {/* <Zoom duration={500}> */}
        <h1 className="experience-heading">Education</h1>
        {/* </Zoom> */}
        <CustomVerticalTimeline events={schools} />
      </div>


      // <div id="experience">
      //   <Fade bottom duration={1000} distance="20px">
      //   <h1 className="experience-heading">Education</h1>
      //     <div className="experience-container" id="education">
      //       <VerticalTimeline lineColor="#e0e0e0">
      //         {schools.map((card, i) => (
      //           <VerticalTimelineElement
      //             key={i}
      //             contentStyle={{ background: '#ffffff', color: '#333' }}
      //             contentArrowStyle={{ borderRight: '7px solidrgb(220, 174, 174)' }}
      //             date={card.duration}
      //             iconStyle={{ background: '#007acc', color: '#fff' }}
      //             icon={<img
      //               src={card.logo}
      //               alt={card.schoolName}
      //               style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '80%' }}
      //             />}
      //           >
      //             <h3 className="vertical-timeline-element-title">
      //               {card.schoolName}
      //             </h3>
      //             <h4 className="vertical-timeline-element-subtitle">
      //               {card.subHeader}
      //             </h4>
      //             <p>{card.desc}</p>
      //             {card.descBullets && (
      //               <ul>
      //                 {card.descBullets.map((point, index) => (
      //                   <li key={index}>{point}</li>
      //                 ))}
      //               </ul>
      //             )}
      //           </VerticalTimelineElement>
      //         ))}
      //       </VerticalTimeline>
      //     </div>
      //   </Fade>
      // </div>
    );
  }
  return null;
}