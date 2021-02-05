import React from "react";
//Import Styles
import { StyledNav } from './styles/NavStyles';
//Scroll
import { Link } from "react-scroll"

const Nav = () => {
    return (
        <StyledNav>
            <h1>
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
            </h1>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-1100}
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
                        offset={-50}
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
                        offset={-100}
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