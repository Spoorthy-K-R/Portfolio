import React, { useState, useRef } from "react";
import "./Publications.css";
import Button from "../button/Button";
import Lottie from "lottie-react";

const publications = [
  {
    id: 1,
    title: "DeepNOMA: A Deep Learning Approach for Signal Detection in NOMA Systems",
    description: "Published in IEEE Communications Letters, this paper presents a novel deep learning framework for efficient signal detection in Non-Orthogonal Multiple Access (NOMA) systems.",
    journal: "IEEE Communications Letters",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/example1",
    lottie: require("../../assets/lottie/signal").default
  },
  {
    id: 2,
    title: "Genomage: Deep Learning for Radiogenomic Classification",
    description: "Published in Nature Scientific Reports, this work introduces a deep learning framework for radiogenomic classification of brain tumors using multi-modal medical imaging data.",
    journal: "Nature Scientific Reports",
    year: "2023",
    link: "https://nature.com/articles/example2",
    lottie: require("../../assets/lottie/brain1").default
  }
];

export default function Publications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null);
  const startX = useRef(null);

  const swipeTo = (direction) => {
    if (animating) return;
    setAnimationDirection(direction);
    setAnimating(true);
  };

  const handleAnimationEnd = () => {
    setActiveIndex((prevIndex) => {
      if (animationDirection === "left") {
        return (prevIndex + 1) % publications.length;
      } else if (animationDirection === "right") {
        return (prevIndex - 1 + publications.length) % publications.length;
      }
      return prevIndex;
    });
    setAnimating(false);
    setAnimationDirection(null);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 40) {
      swipeTo("left");
    } else if (diff < -40) {
      swipeTo("right");
    }
    startX.current = null;
  };

  return (
    <div className="publications-container">
      <h1 className="publications-title">Publications</h1>
      <div className="publications-wrapper">
        <button
          className="nav-arrow left-arrow"
          onClick={() => swipeTo("right")}
          aria-label="Previous publication"
        >
          ‹
        </button>

        <button
          className="nav-arrow right-arrow"
          onClick={() => swipeTo("left")}
          aria-label="Next publication"
        >
          ›
        </button>

        {publications.map((pub, i) => {
          const rawOffset = i - activeIndex;
          const offset =
            rawOffset > 2
              ? rawOffset - publications.length
              : rawOffset < -2
              ? rawOffset + publications.length
              : rawOffset;
          
          if (Math.abs(offset) > 1) return null;

          const baseTranslateX = 150;
          const translateX = offset * baseTranslateX;
          const scale = offset === 0 ? 1 : 0.8;
          const zIndex = offset === 0 ? 10 : 5;

          let classNames = "publication-card";
          if (animating && i === activeIndex) {
            classNames += animationDirection === "left" ? " slide-left" : " slide-right";
          }

          return (
            <div
              key={pub.id}
              className={classNames}
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity: offset === 0 ? 1 : 0.6,
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
              onAnimationEnd={i === activeIndex ? handleAnimationEnd : undefined}
              onTouchStart={i === activeIndex ? handleTouchStart : undefined}
              onTouchEnd={i === activeIndex ? handleTouchEnd : undefined}
            >
              <div className="lottie-background">
                <Lottie 
                  animationData={pub.lottie} 
                  loop={true} 
                  autoplay={true} 
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h2>{pub.title}</h2>
              <p className="journal-info">{pub.journal} ({pub.year})</p>
              <p>{pub.description}</p>
              <Button text="Read Paper" href={pub.link} className="publication-button" />
            </div>
          );
        })}
      </div>
    </div>
  );
} 