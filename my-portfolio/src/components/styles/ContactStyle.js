import styled from "styled-components";
//Import image
import Uranus from '../../img/uranus.png';
//Import styled component
import {About, SatelliteBtnJupiter, AboutMeSection} from './AboutMeStyles';

export const SatelliteBtnUranus = styled(SatelliteBtnJupiter)``;

export const ContactSide = styled(About)`
    background-image: url(${Uranus});
`;

export const ContactSection = styled(AboutMeSection)`
padding: 1rem;
a{
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        font-size: 1.5rem;
        animation:shadow 1.2s linear infinite;
            @keyframes shadow{
                0%{text-shadow:2px 2px 2px red }
                50%{text-shadow:3px 5px 6px red }
                100%{text-shadow:2px 2px 2px red }
            }
        &:hover{
            color:red;
`;