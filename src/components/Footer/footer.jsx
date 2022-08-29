import React from "react";
import "./footer.css";
import { GrLinkedinOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ELGenius
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ahemd-hany-9bb233214"
          target="_blank"
        >
          <GrLinkedinOption />
        </a>
        <a href="https://twitter.com/_elgenius" target="_blank">
          <GrTwitter />
        </a>
        <a href="https://github.com/ahmedelgenius" target="_blank">
          <GrGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ELGenius. All rigths reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
