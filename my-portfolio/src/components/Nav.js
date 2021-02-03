import React from "react";
//Import Styles
import {StyledNav} from './styles/NavStyles';

const Nav = () => {
    return (
        <StyledNav>
            <h1>Home</h1>
            <ul>
                <li>
                    About Me
                </li>
                <li>
                    My Works
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </StyledNav>
    );
};

export default Nav;