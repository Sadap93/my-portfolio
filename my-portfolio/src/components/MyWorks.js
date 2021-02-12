import React from "react";
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatellite, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Planet2 from '../img/planet2.png';
//Import frame motion
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
//Import Styles
import { MyWorksSectionContainer, ContainerMyWorks, MyWorksSatellite, PlanetWrapper2, MusicPlayerWrapper, MyPortfoliaWrapper, TodoListWrapper } from '../styles/MyWorksStyle';


const MyWork = ({ satelliteStatusMyWorks, setSatelliteStatusMyWorks, isPlaying }) => {

    return (
        <ContainerMyWorks id="myworks">

            <PlanetWrapper2 >
                <img className={isPlaying ? 'rotate' : 'rotate-pause'} src={Planet2} alt="palenet2"></img>
            </PlanetWrapper2>

            <MyWorksSatellite onClick={() => setSatelliteStatusMyWorks(!satelliteStatusMyWorks)}>My Works...<FontAwesomeIcon icon={faSatellite} /></MyWorksSatellite>
            <AnimatePresence>
                {satelliteStatusMyWorks && (


                    <AnimateSharedLayout>
                        <MyWorksSectionContainer
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <MusicPlayerWrapper>
                                <p>Music Player </p>
                                    <a href="https://sadap93.github.io/musicplayer/" target="blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faDesktop}/> demo
                                    </a> 
                                    <a href="https://github.com/Sadap93/musicplayer" target="blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub}/> code 
                                    </a>
                                
                            </MusicPlayerWrapper>

                            <MyPortfoliaWrapper>
                                <p>My Portfolio </p>
                                    <a href="https://sadap93.github.io/my-portfolio/" target="blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faDesktop}/> demo
                                    </a> 
                                    <a href="https://github.com/Sadap93/my-portfolio" target="blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub}/> code 
                                    </a>
                                
                            </MyPortfoliaWrapper>

                            <TodoListWrapper>
                                <p>Todo List </p>
                                    <a href="https://sadap93.github.io/react-todo/" target="blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faDesktop}/> demo
                                    </a> 
                                    <a href="https://github.com/Sadap93/react-todo" target="blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub}/> code 
                                    </a>
                                
                            </TodoListWrapper>

                        </MyWorksSectionContainer>
                    </AnimateSharedLayout>


                )}
            </AnimatePresence>
        </ContainerMyWorks>
    );
};

export default MyWork; 