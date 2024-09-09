import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          © 2024 Ahsan Pervaiz | Portfolio Website. All Rights Reserved.
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ahsan-pervaiz-967900227/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaLinkedin className="w-6 h-6" aria-hidden="true" />
            <span className="sr-only">LinkedIn profile</span>
          </a>
          <a
            href="https://github.com/realAhsan"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaGithub className="w-6 h-6" aria-hidden="true" />
            <span className="sr-only">GitHub profile</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
