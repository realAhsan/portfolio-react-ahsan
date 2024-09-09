import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>Ahsan Pervaiz</span>
        </div>
        <div className="des">
          {/* 30 */}A self-driven and meticulous Software Engineer proficient in
          React.js, Node.js, Express.js, MongoDB and React Native
        </div>

        <a
          href="/Ahsan-Pervaiz-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Resume
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/ahsan.png" alt="" />
          <div className="info">
            <div>DEVEVLOPER</div>
            <div>Pakistan</div>
            <div>23/06</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
