import React from "react";
import "./about.css";

import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import Me from "../../assets/avatar-2.svg";

import AboutBox from "./AboutBox";

const About = () => {
  return (
    <div className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="me" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a Full Stack Web Developer passionate about building scalable,
              user-friendly web applications. I specialize in seamless
              frontend-backend integration, optimizing performance, and creating
              intuitive digital experiences.
            </p>
            <a href="/altaf-resume.pdf" className="btn" download>
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            {/* <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div> */}
            <i class="fa-brands fa-html5 skill_icons"></i>
            <i class="fa-brands fa-css skill_icons"></i>
            <SiTailwindcss className="skill_icons" />
            <FaBootstrap className="skill_icons" />
            <i class="fa-brands fa-js skill_icons"></i>
            <i class="fa-brands fa-react skill_icons"></i>
            <SiReactrouter className="skill_icons" />
            <SiRedux className="skill_icons" />
            <i class="fa-brands fa-node-js skill_icons"></i>
            <SiExpress className="skill_icons" />
            <SiMongodb className="skill_icons" />
            <FaGitAlt className="skill_icons" />
            <FaGithub className="skill_icons" />
          </div>
        </div>
      </div>

      <AboutBox />
    </div>
  );
};

export default About;
