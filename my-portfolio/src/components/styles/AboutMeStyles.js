import styled from "styled-components";
import Jupiter from '../../img/jupiter.png';
import { motion } from "framer-motion";

export const SatelliteBtnJupiter = styled.h1`
    text-align: center;
    font-size: 2rem;
    position: relative;
    top: 5rem;
        span{
            cursor: pointer;
            animation:shadow 1.2s linear infinite;
            @keyframes shadow{
                0%{text-shadow:2px 2px 2px red }
                50%{text-shadow:13px 8px 6px red }
                100%{text-shadow:2px 2px 2px red }
            }
        }
        .satellite{
            animation: satelliteShadow 1.2s linear infinite;
            @keyframes satelliteShadow{
                0%{filter:drop-shadow(2px 2px 2px red)}; 
                50%{filter:drop-shadow(13px 8px 6px red)}; 
                100%{filter:drop-shadow(2px 2px 2px red)}; 
            }
        }
`;

export const About = styled.div`
    background-image: url(${Jupiter});
    background-repeat: no-repeat;
    background-size: 85vh;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    color: white;
`;

    export const AboutMeSection = styled(motion.div)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        background-color: rgba(50, 144, 159, 0.5);
        border-radius: 15px;
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
        line-height: 1.9rem;
        h1,h3,p{
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
        }
        h1{
            font-size: 3rem;
        }
        h2{
            font-size: 2rem;
        }
        p{
           font-size: 1.1rem;
        }
        span{
            color: #2D9E4A;
            background: rgba(50,50,50,0.74);
            border-radius: 10px;
         }
    `;


        export const ImageMe = styled.div`
            img{
                height: 35vh;
                margin: 1rem;
                border-radius: 15%;  
                box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
            }
        `;

