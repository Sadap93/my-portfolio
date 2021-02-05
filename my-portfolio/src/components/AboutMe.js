import React from 'react';
//Import Images
import Me from '../img/03_48_bw.jpg';
//Import Styles
import { About, AboutMeSection, ImageMe, SatelliteBtnJupiter } from './styles/AboutMeStyles';
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";


const AboutMe = ({satelliteStatusJupiter,  setSatelliteStatusJupiter}) => {
    return (
        <div style={{height: "100vh"}}>
            <SatelliteBtnJupiter id="about">
                <span onClick={() =>  setSatelliteStatusJupiter(!satelliteStatusJupiter)}>
                    Click me: ..<FontAwesomeIcon className="satellite" icon={faSatellite} />
                </span>
            </SatelliteBtnJupiter>
            <About>
                <AnimatePresence>
                    {satelliteStatusJupiter && (
                        <AnimateSharedLayout>
                            <AboutMeSection
                         
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <ImageMe>
                                    <img src={Me} alt="sandor"></img>
                                </ImageMe>
                                <h1>Hi, i am <span>Sandor Kovacs</span>,</h1>
                                <h3>...</h3>
                                <h2>junior frontend developer</h2>
                                <p>I have been learning webdeveloper tricks every day since October 2020.</p>
                                <p>My skills: </p>
                                <p>HTML, CSS, Javascript, React, jQuery, GIT, GitHub</p>
                            </AboutMeSection>
                        </AnimateSharedLayout>
                    )}
                </AnimatePresence>
            </About>
        </div>
    );
};

export default AboutMe;