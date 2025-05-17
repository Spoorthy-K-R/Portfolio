import React, { useState, useRef } from "react";
import "./Cards.css";
import {bigProjects} from "../portfolio";

const cards = bigProjects.projects;
// [
//   { id: 1, title: "Card One", description: "This is the first card." },
//   { id: 2, title: "Card Two", description: "This is the second card." },
//   { id: 3, title: "Card Three", description: "This is the third card." },
//   { id: 4, title: "Card Four", description: "This is the fourth card." },
//   { id: 5, title: "Card Five", description: "This is the fifth card." },
// ];

export default function HorizontalSwipeStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(null);
  const startX = useRef(null);

  // Trigger swipe animation then update active card
  const swipeTo = (direction) => {
    if (animating) return;
  
    setAnimationDirection(direction);
    setAnimating(true);
  };

  // Handle animation end to update active card and reset animation state
  const handleAnimationEnd = () => {
    setActiveIndex((prevIndex) => {
      if (animationDirection === "left") {
        return (prevIndex + 1) % cards.length; // wrap to 0 after last
      } else if (animationDirection === "right") {
        return (prevIndex - 1 + cards.length) % cards.length; // wrap to last from 0
      }
      return prevIndex;
    });
    setAnimating(false);
    setAnimationDirection(null);
  };

  // Touch handlers
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
    <div className="stack-container">
      <h1 className="stack-title">Projects</h1>
        <div className="stack-wrapper">
        <button
          className="nav-arrow left-arrow"
          onClick={() => swipeTo("right")}
          aria-label="Previous card"
        >
          ‹
        </button>

        <button
          className="nav-arrow right-arrow"
          onClick={() => swipeTo("left")}
          aria-label="Next card"
        >
          ›
        </button>

          {cards.map((card, i) => {
            const rawOffset = i - activeIndex;
            const offset =
              rawOffset > 2
                ? rawOffset - cards.length
                : rawOffset < -2
                ? rawOffset + cards.length
                : rawOffset;
            
            if (Math.abs(offset) > 1) return null;

            if (offset < -1 || offset > 1) return null;

            const baseTranslateX = 150;
            const translateX = offset * baseTranslateX;
            const scale = offset === 0 ? 1 : 0.8;
            const zIndex = offset === 0 ? 10 : 5;

            // If animating and this is active card, add slide out animation class
            let classNames = "stack-card";
            if (animating && i === activeIndex) {
              classNames += animationDirection === "left" ? " slide-left" : " slide-right";
            }

            return (
              <div
                key={card.id}
                className={classNames}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity: offset === 0 ? 1 : 0.8,
                  pointerEvents: offset === 0 ? "auto" : "none",
                }}
                onAnimationEnd={i === activeIndex ? handleAnimationEnd : undefined}
                onTouchStart={i === activeIndex ? handleTouchStart : undefined}
                onTouchEnd={i === activeIndex ? handleTouchEnd : undefined}
              >
                <h2>{card.projectName}</h2>
                <p>{card.projectDesc}</p>
              </div>
            );
          })}
        </div>
    </div>
  );
}