import React from "react";
import "./Techstacks.css";



import { SiC } from 'react-icons/si';
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobelightroomclassic } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaudition } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";








export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiC />
            <h5>C</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <FaPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiGnubash />
            <h5>Bash</h5>
          </div>
          <div>
            <FaHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <FaCss3Alt />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>

          <div>
            <FaReact />
            <h5>React</h5>
          </div>

          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <FaGitAlt />
            <h5>Git</h5>
          </div>
          <div>
            <FaGithub />
            <h5>Github</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <SiAdobepremierepro />
            <h5>Premiere Pro</h5>
          </div>
          <div>
            <SiAdobeaftereffects />
            <h5>After Effects</h5>
          </div>
          <div>
            <SiAdobelightroomclassic />
            <h5>Lightroom</h5>
          </div>
          <div>
            <SiAdobephotoshop />
            <h5>Photoshop</h5>
          </div>
          <div>
            <SiAdobeaudition />
            <h5>Audition</h5>
          </div>
          <div>
            <SiAdobeillustrator />
            <h5>Illustrator</h5>
          </div>
        </div>
      </div>
    </>
  );
};
