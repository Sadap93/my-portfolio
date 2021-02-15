//Import styled
import styled from "styled-components";
//Import motion
import { motion } from "framer-motion";

export const ContainerAboutMe = styled.div`
   padding-top: 80px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   width: 100%;
    .slider{
        width: 500px;
        height: 500px;
        margin: 1rem auto 0 auto;
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
        border-radius: 15px;
        @media (max-width: 900px){
            width: 450px;
        }
        @media (max-width: 760px){
            width: 400px;
            height: 400px;
        }
        @media (max-width: 640px){
            width: 350px;
            height: 340px;
        }
        @media (max-width: 560px){
            width: 300px;
            height: 270px;
        }
         @media (max-width: 460px){
            width: 250px;
        }
        @media (max-width: 360px){
            width: 200px;
        }
        @media (max-width: 320px){
            width: 175px;
        }
        .slick-next:before, .slick-prev:before {
            color: red;
            animation: btnShadow 1.2s linear infinite;
                    @keyframes btnShadow{
                        0%{filter:drop-shadow(2px 2px 2px red)}; 
                        50%{filter:drop-shadow(6px 4px 6px red)}; 
                        100%{filter:drop-shadow(2px 2px 2px red)}; 
                    }
        }
        .slick-dots li.slick-active button:before {
            color:  #329555!important;
            font-size: 0.7rem;
            animation: btnShadowActive 1.2s linear infinite;
                        @keyframes btnShadowActive{
                            0%{filter:drop-shadow(2px 2px 2px #329555)}; 
                            50%{filter:drop-shadow(6px 4px 6px #329555)}; 
                            100%{filter:drop-shadow(2px 2px 2px #329555)}; 
                        }
        }
        .slick-dots li button::before {
            color:red ;
            opacity:0.8;
            font-size: 0.7rem;
            animation: btnShadow 1.2s linear infinite;
                    @keyframes btnShadow{
                        0%{filter:drop-shadow(2px 2px 2px red)}; 
                        50%{filter:drop-shadow(6px 4px 6px red)}; 
                        100%{filter:drop-shadow(2px 2px 2px red)}; 
                    }
        }
    }  
`;


    export const PlanetWrapper = styled.div`
        position: absolute;
        z-index: -2;
        transition: 0.5s;
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
                width: 865px;
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

    export const AboutMeSatellite = styled.h1`
      margin-top: 1vh;
      text-align: center;
      padding: 5px;
      margin-bottom: 10px;
      background:rgba(168, 161, 153, 0.6);
      border-radius: 15px;
      /* box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75); */
      transition: all 0.5s ease;
      cursor: pointer;
      animation:shadow 1.2s linear infinite;
        @keyframes shadow{  
            0%{box-shadow: 7px 7px 16px 0px rgba(255, 0, 0, 0.75); }
            50%{box-shadow: 7px 7px 5px 0px rgba(255, 0, 0, 0.75); }
            100%{box-shadow: 7px 7px 16px 0px rgba(255, 0, 0, 0.75); }
        }
      &:hover{
        transform: scale(1.15); 
        /* color: red; */
      }

        /* svg{
                animation: satelliteShadow 1.2s linear infinite;
                @keyframes satelliteShadow{
                    0%{filter:drop-shadow(2px 2px 2px red)}; 
                    50%{filter:drop-shadow(13px 8px 6px red)}; 
                    100%{filter:drop-shadow(2px 2px 2px red)}; 
                }
        } */
    `;



    export const AboutMeSectionContainer = styled(motion.div)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        background-color: rgba(93, 149, 223, 0.5);
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
        border-radius: 15px;
        padding: 25px;
        height: 500px;
        .intro-wrapper{
            padding: 30px;
            background-color: rgba(33, 33, 33, 0.7);
            border-radius: 5px;
            line-height: 1.7rem;
            p{
           
            text-align: justify;
            }
        }
        img{
            width: 150px;
            box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
            border-radius: 15%;
        }
        span{
            color: #2D9E4A;
            background: rgba(50,50,50,0.74);
            border-radius: 5px;
            text-shadow: none;
        }
        @media (max-width: 760px){
            height: 400px;
            .intro-wrapper{
                padding: 20px;
                line-height: 1.4rem;
            }
            img{
                width: 125px;
            }
        }
        @media (max-width: 640px){
            height: 340px;
            line-height: 1.2rem;
            .intro-wrapper{
                padding: 10px;
                line-height: 1.2rem;
            }
            img{
                width: 100px;
            }
            h1{
                font-size:1.6rem;
                line-height: 2rem;
            }
            p{
                font-size: 0.8rem;
            }
        }
        @media (max-width: 560px){
            height:  270px;
            padding: 5px;
            .intro-wrapper{
                padding: 8px;
                line-height: 1rem;
            }
           
            h1{
                font-size: 1.4rem;
                line-height: 1.7rem;
            }
            h3{
                font-size: 1rem;
            }
            p{
                font-size: 0.7rem;
            }
            img{
                width: 70px;
            }
        }
        @media (max-width: 360px){
            .intro-wrapper{
                padding: 6px;
                line-height: 0.8rem;
            }
            h1{
                font-size: 1.2rem;
                line-height: 1.6rem;
            }
            h3{
                font-size: 0.9rem;
            }
            p{
                font-size: 0.6rem;
            }
            img{
                width: 65px;
            }
        }
`;
    export const AboutMeSectionContainer2 = styled(AboutMeSectionContainer)`
        text-align: inherit;
        .html-wrapper{
            padding: 3px;
            background-color: rgba(241, 101, 36, 0.7);
            border-radius: 5px;
        }
        .css-wrapper{
            padding: 3px;
            background-color: rgba(1, 111, 186, 0.7);
            border-radius: 5px;
        }
        .js-wrapper{
            padding: 3px;
            background-color: rgba(232, 200, 37, 0.7);
            border-radius: 5px;
        }
        .react-wrapper{
            padding: 3px;
            background-color: rgba(33, 33, 33, 0.7);
            border-radius: 5px;
        }
        
        li{
            font-family: 'Stellar';
            list-style: none;
        }
       
        @media (max-width: 640px){
               line-height: 0.9rem;
            
            p, li{
                font-size: 0.8rem;
            }
        }
        @media (max-width: 560px){
            height:  270px;
               line-height: 0.9rem;
            h3{
                font-size: 0.8rem;
            }
            p, li{
                font-size: 0.6rem;
            }

        }
        @media (max-width: 360px){
            line-height: 0.7rem;
            h3{
                font-size: 0.9rem;
            }
            p, li{
                font-size: 0.6rem;
            }

        }
      
    `;