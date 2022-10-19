import React from "react";
//Import Images
import Me from "../img/03_48_bw.jpg";
import Planet from "../img/planet.png";
//Import Styles
import {
  PlanetWrapper,
  ContainerAboutMe,
  AboutMeSatellite,
  AboutMeSectionContainer,
  AboutMeSectionContainer2,
} from "../styles/AboutMeStyles";
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Import Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutMe = ({
  satelliteStatusAboutMe,
  setSatelliteStatusAboutMe,
  isPlaying,
}) => {
  const settings = {
    dots: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
  };

  return (
    <>
      <ContainerAboutMe id="about">
        <PlanetWrapper>
          <img
            className={isPlaying ? "rotate" : "rotate-pause"}
            src={Planet}
            alt="palenet"
          ></img>
        </PlanetWrapper>

        <AboutMeSatellite>
          <span
            onClick={() => setSatelliteStatusAboutMe(!satelliteStatusAboutMe)}
          >
            About Me...
            <FontAwesomeIcon className="satellite" icon={faSatellite} />
          </span>
        </AboutMeSatellite>
        <AnimatePresence>
          {satelliteStatusAboutMe && (
            <Slider className="slider" {...settings}>
              <AnimateSharedLayout>
                <AboutMeSectionContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img src={Me} alt="sandor"></img>

                  <h1>
                    Hi, i am
                    <br />
                    <span>Sandor Kovacs</span>,
                  </h1>
                  <p>
                    I like to acquire new knowledge, I enjoy creative,
                    challenging work, that is why I started learning web
                    development in a self-taught way. My goal is to work as a
                    programmer in the future. My hobbies are cooking,
                    playstation, fishing, lego, model building.
                  </p>
                </AboutMeSectionContainer>
              </AnimateSharedLayout>

              <AnimateSharedLayout>
                <AboutMeSectionContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="intro-wrapper">
                    <h1>introduction</h1>
                    <p>
                      My first meet with programming was in a university course.
                      We made some geographic projects and demographic maps. I
                      liked it but I had no brave to change my studies. I got
                      master's degree in earth science at University of Szeged
                      in 2019. I worked as a geologist for a year but I didn't
                      find my happiness in this field. So, I realized what I
                      actually want. I want to be a programmer. I enrolled in{" "}
                      <strong> CodeBerry Programming School</strong> and I got
                      the basics of html, css and javascript, after this I
                      self-taught React.js from english courses. Please click on
                      the arrow and check my skills.
                    </p>
                  </div>
                </AboutMeSectionContainer>
              </AnimateSharedLayout>

              <AnimateSharedLayout>
                <AboutMeSectionContainer2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3>My Skills</h3>

                  <div className="html-wrapper">
                    <p>
                      HTML: <FontAwesomeIcon icon={faHtml5} />
                    </p>
                    <ul>
                      <li>Basics, Structure construction</li>
                      <li>Forms and validation</li>
                    </ul>
                  </div>

                  <div className="css-wrapper">
                    <p>
                      CSS: <FontAwesomeIcon icon={faCss3} />
                    </p>
                    <ul>
                      <li>Basics, responsive desing with media queries</li>
                      <li>Flex-box, animations, keyframes, hover effects</li>
                    </ul>
                  </div>

                  <div className="js-wrapper">
                    <p>
                      JavaScript <FontAwesomeIcon icon={faJsSquare} />
                    </p>
                    <ul>
                      <li>Syntax and basic construct</li>
                      <li>
                        DOM manipulation with vanila JS and jQuery, CSS in JS
                      </li>
                    </ul>
                  </div>

                  <div className="react-wrapper">
                    <p>
                      React.js: <FontAwesomeIcon icon={faReact} />
                    </p>
                    <ul>
                      <li>JSX, Installing and use dependencies</li>
                      <li>Create, manipulate and lifting components</li>
                      <li>
                        Styled-components, basics of Sass, framer-motion and
                        slick
                      </li>
                    </ul>
                  </div>
                </AboutMeSectionContainer2>
              </AnimateSharedLayout>
            </Slider>
          )}
        </AnimatePresence>
      </ContainerAboutMe>
    </>
  );
};

export default AboutMe;
