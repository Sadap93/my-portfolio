import React from "react";
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Import Styles
import { SatelliteBtnUranus, ContactSide, ContactSection } from './styles/ContactStyle';

const Contact = ({ satelliteStatusUranus, setSatelliteStatusUranus }) => {
    return (
        <>
            <SatelliteBtnUranus>
                <span onClick={() => setSatelliteStatusUranus(!satelliteStatusUranus)}>
                    Click me: ..<FontAwesomeIcon className="satellite" icon={faSatellite} />
                </span>
            </SatelliteBtnUranus>
            <ContactSide>
                <AnimatePresence>
                    {satelliteStatusUranus && (
                        <AnimateSharedLayout>
                            <ContactSection
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                                <h1>Contact</h1>
                                <p>...</p>
                                <p><a href="mailto: sadap93@gmail.com">Email: sadap93@gmail.com</a></p>
                                <p><a href="tel: +36706349269">Mobile: +36706349269</a></p>
                                <p><a href="https://github.com/Sadap93?tab=repositories" target="blank">GitHub</a></p>
                                <p><a href="https://www.linkedin.com/in/sandor-kovacs93/" target="blank">LinkedIn</a></p>
                            </ContactSection>
                        </AnimateSharedLayout>
                    )}
                </AnimatePresence>
            </ContactSide>
        </>
    );
};

export default Contact;