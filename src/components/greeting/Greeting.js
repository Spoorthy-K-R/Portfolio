import React from "react";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/CodingWomanHi";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../portfolio";
// import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  // const {isDark} = useContext(StyleContext);

  return (
    <div className="greeting-container">
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={"greeting-text"}
              >
                <p className="greeting-java">
                {" "}
                {greeting.java}{" "}
                </p>
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              {/* <p
                className={
                 "greeting-text-p subTitle text-left"
                }
              >
                {greeting.subTitle}
              </p> */}
              <div className={
                 "greeting-text-p subTitle text-left"
                }>
              {greeting.subTitle.map((skills, i) => {
                return (
                  <p className="skills-text">
                    {Array.isArray(skills) ? (
                      skills.map((segment, j) => (
                        j === 1 ? (
                          <span key={j} className="university-highlight">
                            {segment}
                          </span>
                        ) : (
                          <span key={j}>{segment}</span>
                        )
                      ))
                    ) : (
                      skills
                    )}
                  </p>
                );
              })}
            </div>
              <div id="resume" className="empty-div"></div>
              {/* <SocialMedia /> */}
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./Spoorthy-KR-Resume-2026.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
          {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="woman sitting on chair"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
    </div>
  );
}
