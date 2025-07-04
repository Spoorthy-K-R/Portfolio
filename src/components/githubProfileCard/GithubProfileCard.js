import React from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../portfolio";
import emoji from "react-easy-emoji";
import {Fade, Zoom} from "react-awesome-reveal";

export default function GithubProfileCard({prof}) {
  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  console.log(prof);
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="main" id="contact">
        <div className="row">
          <div className="main-content-profile">
          <Zoom duration={500}>
            <h1 className="prof-title">Reach Out to me!</h1>
            </Zoom>
            {prof.location !== null && (
                <span className="desc-prof">
                <svg
                  viewBox="-0.5 -2 20 19"
                  version="1.1"
                  width="22"
                  height="16"
                  aria-hidden="true"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  ></path>
                </svg>
                {prof.location}
              </span>
            )}
              <p className="subTitle ">
                Open for opportunities: {prof.hireable}
              </p>
              <p className="subTitle ">{contactInfo.subtitle}
              </p>
              <p className="subTitle ">
                <a className="email" href={`mailto:${contactInfo.mail}`}>{contactInfo.mail}</a>
              </p>
              
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
            <p className="subTitle blog-subtitle">"{emoji(String(prof.bio))}"</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
