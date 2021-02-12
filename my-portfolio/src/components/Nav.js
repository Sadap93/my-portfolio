import React, {useState, useRef} from "react";
//Import Styles
import { StyledNav } from '../styles/NavStyles';
//Scroll
import { Link } from "react-scroll"
//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Nav = ({timeUpdateHandler, isPlaying, setIsPlaying}) => {

    //Song Download Link
    let alienSong = "https://drive.google.com/uc?export=download&id=19pCBKiEbXqg7CwUZzbBW1uQ4bPQn7e1x";

    //Ref
    const audioRef = useRef(null);

    //State
    const [mute, setMute] = useState(false);

    //Handlers
    const playHandler = () => {
        if (isPlaying === true) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    
    const muteHandler = () => {
        setMute(!mute);
    };

    return (
        <StyledNav>
                <ul>
                    <li className="home">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-1100}
                            duration={500}
                            >
                            Home
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            onClick={playHandler}
                            icon={isPlaying ? faPause : faPlay}
                            className="play"
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            onClick={muteHandler}
                            icon={mute ? faVolumeMute : faVolumeUp}
                            className="mute"
                            />
                    </li>
                            <audio
                            onTimeUpdate={timeUpdateHandler}
                            ref={audioRef}
                            src={alienSong}
                            loop={true}
                            muted={mute}
                            >
                            </audio>
                </ul>

                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="myworks"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            My Works
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
        </StyledNav>
    );
};

export default Nav;