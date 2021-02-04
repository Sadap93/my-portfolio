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
        &:hover{
            color:#1E7349;
            /* text-shadow:  6px 4px 7px rgba(140, 150, 150, 0.7); */
        }
    }
`;
