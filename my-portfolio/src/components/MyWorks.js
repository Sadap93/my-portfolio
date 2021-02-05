import React from "react";
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite } from "@fortawesome/free-solid-svg-icons";
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Import Styles
import { MyWorks, SatelliteBtnSaturn, MyWorksSection } from './styles/MyWorksStyle';

const MyWork = ({ satelliteStatusSaturn, setSatelliteStatusSaturn }) => {
    return (
        <div id="myworks">
            <SatelliteBtnSaturn>
                <span onClick={() => setSatelliteStatusSaturn(!satelliteStatusSaturn)}>
                    Click me: ..<FontAwesomeIcon className="satellite" icon={faSatellite} />
                </span>
            </SatelliteBtnSaturn>
            <MyWorks>
                <AnimatePresence>

                    {satelliteStatusSaturn && (
                        <AnimateSharedLayout>

                            <MyWorksSection
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h1>My Works</h1>
                                <p>...</p>
                                <p><a href="https://github.com/Sadap93/my-portfolio" target="_blank">This page</a></p>
                                <p><a href="https://github.com/Sadap93/musicplayer" target="_blank">Media Player</a></p>
                                <p><a href="https://github.com/Sadap93/react-todo" target="_blank">Todo List</a></p>
                            </MyWorksSection>
                        </AnimateSharedLayout>
                    )}
                </AnimatePresence>
            </MyWorks>
        </div>
    );
};

export default MyWork; 