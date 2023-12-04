import React from "react";
import "./HeroStyles.css";

export default function Hero() {
  return (
    <div>
      <div className="Section">
        <div className="LeftSection">
          <div className="SectionTitle">
            Welcome to <br />
            My Personal Portfolio
          </div>
          <div className="SectionText">
            The Purpose of JavaScript Mastery is to help aspiring and
            established developers to take their development skills to the next
            level and build awesome apps.
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}


