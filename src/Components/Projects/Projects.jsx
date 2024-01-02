import React from "react";
import "./Projects.css";

import { FaPython, FaRoute } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAmazons3 } from "react-icons/si";






export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/thatsyuviii/Fabric-Identification-and-Defect-Detection/blob/main/image.png?raw=true"
                  alt="Fabric Identification and Defect Detection"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Fabric Identification and Defect Detection </h2>
              <p>
                Made using tensorflow, keras, numpy, sklearn and for graphical interface is made using tkinter. Used tools Convolution Neural Network , You Only Look Once, Computer Vision,
                Generative Adversarial Network technologies to identify and detect the fabric.
              </p>
              <div>
                <FaPython />
                <SiTensorflow />
                <SiKeras />
                <SiNumpy />
                <SiScikitlearn />
              </div>
              <div>
                <a
                  href="https://github.com/thatsyuviii/Fabric-Identification-and-Defect-Detection"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://raw.githubusercontent.com/thatsyuviii/Weather/main/weather.png"
                  alt="Weather Forecasting"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Weather Forecasting app </h2>
              <p>
                Created Weather forecasting application using tkinter. Used API to know the exact time of a given location. Used libraries like timezonefinder and geopy to find the
                timezone, latitute and longitude.
              </p>
              <div>
                <FaPython />
              </div>
              <div>
                <a
                  href="https://github.com/thatsyuviii/Weather"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://raw.githubusercontent.com/thatsyuviii/Fortune-Teller-Website/master/image.png"
                  alt="Fortune Teller"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Fortune Teller</h2>
              <p>
              Fortune Teller is a web application that predicts the fortune, By Asking questions questions from the seeker. and replying that with
              Yes, No, Maybe. It is made using HTML, CSS, JavaScript and uses aws services like Lambda and API Gateway.
              </p>
              <div>
                <FaAws />
                <FaHtml5 />
                <FaCss3Alt />
                <SiJavascript />  
              </div>
              <div>
                <a
                  href="https://github.com/thatsyuviii/Fortune-Teller-Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
                <a
                  href="https://fortunetellerr.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this live
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/thatsyuviii/My-Portfolio/blob/main/image.png?raw=true"
                  alt="Portfolio Website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Portfolio Website</h2>
              <p>
              This is my Portfolio website. It contains everything that i wanted to showcase myself. It is made using React, HTML, CSS, JavaScript and hosted 
              using aws services like S3, Cloudfront, Route53 and Certificate Manager.
              </p>
              <div>
                <FaAws />
                <SiAmazons3 />
                <FaReact />
                <FaHtml5 />
                <FaCss3Alt />
                <SiJavascript />  
              </div>
              <div>
                <a
                  href="https://github.com/thatsyuviii/My-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </>
  );
};
