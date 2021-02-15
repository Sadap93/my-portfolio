//Import styled
import styled from "styled-components";
//Import motion
import { motion } from "framer-motion";



export const ContainerContact = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-top: 80px;
   min-height: calc(100vh - 50px);
   width: 100%;
`;

export const PlanetWrapper3 = styled.div`
    position: absolute;
    z-index: -2;
    transition: 0.5s;
    img{
        width: 900px;
    }
    .rotate {
        animation: rotation 118s infinite linear;
    }
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
    .rotate-pause{
        animation: rotation 118s infinite linear;
        animation-play-state: paused;
    }
    @media (max-width: 1000px), (max-height: 1000px){
        img{
            width: 835px;
        }
    }
    @media (max-width: 900px), (max-height: 900px){
        img{
            width: 740px;
        }
    }
    @media (max-width: 760px), (max-height: 800px){
        img{
            width: 620px;
        }
    }
    @media (max-width: 640px), (max-height: 700px){
        img{
            width: 540px;
        }
    }
    @media (max-width: 560px), (max-height: 600px){
        img{
            width: 440px;
        }
    }
    @media (max-width: 460px), (max-height: 520px){
        img{
            width: 340px;
        }
    }
    @media (max-width: 358px), (max-height: 520px){
        img{
            width: 300px;
        }
    }
    @media (max-width: 320px),  (max-height: 380px){
        img{
            width: 240px;
        }
    }
    @media  (max-height: 330px){
        img{
            width: 200px;
        }
    }
`;

export const ContactSatellite = styled.h1`
      margin-top: 1vh;
      text-align: center;
      padding: 5px;
      margin-bottom: 10px;
      background:rgba(168, 161, 153, 0.6);
      border-radius: 15px;
      text-shadow: 2px 2px 2px rgba(100, 100, 100, 1);
      transition: all 0.5s ease;
      cursor: pointer;
      animation: shadowKey 1.3s linear infinite;
        @keyframes shadowKey{  
            0%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }
            50%{box-shadow: 7px 7px 5px 0px rgba(255, 0, 0, 0.75); }
            100%{box-shadow: 7px 7px 12px 0px rgba(255, 0, 0, 0.75); }
        }
      &:hover{
        transform: scale(1.15); 
      }
        svg{
            filter:drop-shadow(2px 2px 2px rgba(100, 100, 100, 1));
        }
`;



export const ContactSectionContainer = styled(motion.div)`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
        background-color: rgba(93, 149, 223, 0.5);
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
        border-radius: 15px;
        padding: 5px;
        height: 500px;
        width: 500px;
        animation:shadow 1.2s linear infinite;
            @keyframes shadow{
                0%{text-shadow:2px 2px 2px red }
                50%{text-shadow:3px 5px 6px red }
                100%{text-shadow:2px 2px 2px red }
        }
        p{   
        color: inherit;
        transition: all 0.4s ease;
        font-size: 1.5rem;
        cursor: pointer;
            &:hover{
                transform: scale(1.1);
                color:red;
            }
        }
        svg{
            text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
            animation: satelliteShadow 1.2s linear infinite;
                @keyframes satelliteShadow{
                    0%{filter:drop-shadow(2px 2px 2px red)}; 
                    50%{filter:drop-shadow(3px 5px 6px red)}; 
                    100%{filter:drop-shadow(2px 2px 2px red)}; 
                }
        }
        a{
            color: inherit;
            text-decoration: none; 
        }

        @media (max-width: 760px){
            height: 400px;
            width: 400px;
        }
        @media (max-width: 640px){
            height: 340px;
            width: 340px;
            p{
                font-size: 1rem;
            }
        }
        @media (max-width: 560px){
            height:  210px;
            width:  240px;
        }
`;
