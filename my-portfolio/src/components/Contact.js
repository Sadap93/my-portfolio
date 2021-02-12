import React from "react";
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite, faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Planet3 from '../img/planet3.png';
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Import Styles
import { ContactSectionContainer, ContainerContact, ContactSatellite, PlanetWrapper3 } from '../styles/ContactStyle';


const Contact = ({ satelliteStatusContact, setSatelliteStatusContact, isPlaying }) => {
    
    return (
        <ContainerContact id="contact"/* style={{height:"100vh"}} */>
            <PlanetWrapper3>
                <img className={isPlaying ? 'rotate' : 'rotate-pause'} src={Planet3} alt="palenet3"></img>
            </PlanetWrapper3>
            <ContactSatellite onClick={() => setSatelliteStatusContact(!satelliteStatusContact)}>Contact...<FontAwesomeIcon icon={faSatellite} /></ContactSatellite>
            <AnimatePresence>
                {satelliteStatusContact && (
                   

                        <AnimateSharedLayout>
                            <ContactSectionContainer
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >    
                                <p><a href="mailto: sadap93@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> sadap93@gmail.com</a></p>
                                <p><a href="tel: +36706349269"><FontAwesomeIcon icon={faPhoneAlt}/> +36706349269</a></p>
                                <p><a href="https://github.com/Sadap93?tab=repositories" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/> GitHub</a></p>
                                <p><a href="https://www.linkedin.com/in/sandor-kovacs93/" target="blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a></p>

                            </ContactSectionContainer>
                        </AnimateSharedLayout>
                        
                    
                )}
            </AnimatePresence>
        </ContainerContact>
    );
};

export default Contact;