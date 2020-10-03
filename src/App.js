import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

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
            <a href="home">Home</a>
          </li>
          <li>
            <a href=".about">About</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="testimonials">Testimonials</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="home">
        <div className="fancy"></div>
        <div className="introduction">
          <h1>HI I AM PRIYANSHU...</h1>
          <h2>Full Stack Developer</h2>
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
          <div class="portfolio">
            <h1>PROJECTS</h1>
            <h4>Checkout some of my projects!</h4>
            <div class="portfolio-images">
              <img
                src={require("./chatcord.png")}
                data-aos="zoom-in"
                alt="Chatcord"
              />
              <p>Real time chat app</p>
              <img
                src={require("./google-maps-challenge.png")}
                class="google-maps"
                alt=""
                data-aos="zoom-in"
                duration={0}
              />
              <p>Google maps Project</p>
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
