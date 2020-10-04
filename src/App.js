import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

AOS.init({
  duration: 1000,
});

function App() {
  return (
    <div className="app">
      <div class="nav">
        <img src={require("./profile-pic.jpg")} class="profile-pic" alt="" />
        <ul class="navbar">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div class="home">
        <div className="fancy"></div>
        <div className="introduction">
          <h1>HI I AM PRIYANSHU...</h1>

          <h2>Full Stack Developer</h2>
        </div>
        <div className="float-button">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-chat-left-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
          </svg>
        </div>
        <div class="icons">
          <div class="fancy-icons"></div>
          <div class="fancy-icon"></div>
        </div>
      </div>
      <div class="about">
        <div class="about-heading">
          <h1>
            I AM A <span>Pro</span>grammer
          </h1>
        </div>

        <div class="freelancer__main">
          <div class="freelancer">
            <img
              src={require("./freelancer.png")}
              alt="Free"
              data-aos="fade-right"
            />
            <h3>
              I am a Programmer and I have prior experience in JavaScript and
              python. I Love to code and fix bugs. I tutor people and I find
              immense pleasure in doing so. I dream to make a change in the
              world
            </h3>
          </div>

          <div class="skills" onclick="">
            <h2>SKILLS</h2>
            <div class="skill">
              <div class="skill_list_1">
                <li class="skill-list" data-aos="fade-right">
                  Python
                </li>
                <li class="skill-list" data-aos="fade-right">
                  JavaScript
                </li>
                <li class="skill-list" data-aos="fade-right">
                  Typescript
                </li>
                <li class="skill-list" data-aos="fade-right">
                  React
                </li>
              </div>
              <div class="skill_list_2">
                <li class="skill-list" data-aos="fade-left">
                  Numpy
                </li>
                <li class="skill-list" data-aos="fade-left">
                  Pandas
                </li>
                <li class="skill-list" data-aos="fade-left">
                  Node
                </li>
                <li class="skill-list" data-aos="fade-left">
                  MongoDB
                </li>
              </div>
            </div>
          </div>
          <div class="portfolio">
            <h1>PROJECTS</h1>
            <h4>Checkout some of my projects!</h4>
            <div class="portfolio-images">
              <div className="project-image-1">
                <img
                  src={require("./google-maps-challenge.png")}
                  data-aos="zoom-in"
                  alt="Chatcord"
                  className="google-maps-challenge"
                />
                <p>Google Maps Project</p>
              </div>
              <div className="project-image-1">
                <img
                  src={require("./Capture.JPG")}
                  class="google-maps"
                  alt=""
                  data-aos="zoom-in"
                  duration={0}
                />
                <p className="netflix-clone">Netflix clone</p>
              </div>
            </div>
          </div>

          <div class="testimonials">
            <p class="testimony">TESTIMONIALS</p>
            <div class="dabba">
              <div class="">
                <Carousel>
                  <Carousel.Item>
                    <img src={require("./Babysitters.png")} alt="" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={require("./Babysitters (1).png")} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="contact">
            <h1>Contact</h1>
            <div className="details">
              <p>Address: 123 Fake street, Kolkata, west bengal</p>

              <p>Phone:</p>
              <p>home: (+91) 990 990 9900</p>
              <p>personal: (+91) 990 990 9900</p>
              <p>Here is my resume, download and view!</p>
            </div>
            <a href={require("./PRIYANSHU SARAF.pdf")} target="_blank" download>
              <i class="fas fa-download"></i> Resume
            </a>
          </div>
          {/*  do not delete this code baaddme aajaaio meeting wait fora few mins k? I think that zoom will take up a LOT of ram*/}
        </div>
      </div>
      <div className="footer">
        <h4>
          <i class="far fa-copyright"></i> Made with ❤ by Priyanshu Saraf
        </h4>
      </div>
    </div>
  );
}

export default App;
