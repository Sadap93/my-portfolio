import React, { useState } from 'react';
//Import Images
import Me from '../img/03_48_bw.jpg';
//Import Styles
import { About, AboutMeSection, ImageMe, SatelliteBtn } from './styles/AboutMeStyles';
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";


const AboutMe = () => {
    const [satelliteStatus, setSatelliteStatus] = useState(false);
    return (
        <>
            <SatelliteBtn >
                <span onClick={() => setSatelliteStatus(!satelliteStatus)}>
                    Click me: ..<FontAwesomeIcon className="satellite" icon={faSatellite} />
                </span>
            </SatelliteBtn>
            <About>
                <AnimatePresence>
                    {satelliteStatus && (
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
        </>
    );
};

export default AboutMe;