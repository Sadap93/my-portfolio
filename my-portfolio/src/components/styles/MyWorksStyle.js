import styled from "styled-components";
//Import image
import Saturn from '../../img/saturn.png';
//Import motion
import { motion } from "framer-motion";
//Import styled component
import {About, SatelliteBtnJupiter, AboutMeSection} from './AboutMeStyles';

export const SatelliteBtnSaturn = styled(SatelliteBtnJupiter)`
  top: 25rem;
  right: 18rem;
    
`;

export const MyWorks = styled(About)`
    background-image: url(${Saturn});
    background-size: 130vh;
`;

export const MyWorksSection = styled(AboutMeSection)`
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
            /* text-shadow:  6px 4px 7px rgba(140, 150, 150, 0.7); */
        }
    }
`;
