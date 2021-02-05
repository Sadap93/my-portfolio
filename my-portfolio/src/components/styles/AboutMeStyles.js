import styled from "styled-components";
import Jupiter from '../../img/jupiter.png';
import { motion } from "framer-motion";



export const Container = styled.div`
  background-image: url(${Jupiter});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: top;
    height:1100px;
    max-width: 1700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    
    flex-direction: column;
    @media (max-width: 1850px){
        background-size:60%;
    }
    @media (max-width: 1500px){
        background-size:70%
    }
    @media (max-width: 1300px){
        background-size:80%;
        height:1050px;
    }
    @media (max-width: 1100px){
        background-size:90%;
        height: 1000px;
    }
    @media (max-width: 900px){
        background-size:100%;
        height:910px;
    }
    /* @media (max-width: 800px){
        background-size:110%;
    } */
    /* @media (max-width: 700px){
        background-size:115%;
    } */
    @media (max-width: 650px){
        background-size:120%;
    }
    @media (max-width: 500px){
        background-size:140%;
    }
    @media (max-width: 400px){
        background-size:165%;
        height:700px;
    }
    @media (max-width: 320px){
        background-size:170%;

        
    }


`;

export const SatelliteBtnJupiter = styled.h1`
    text-align: center;
    font-size: 2rem;
    position: relative;
    padding:10px 0px;
   
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
        @media (max-width: 360px){
            font-size: 1.3rem;
            padding: 5px 0;
        }
`;

export const About = styled.div`
  
    display: flex;
    min-height:80vh;
    align-items: center;
    justify-content: center;
    color: white;
`;

    export const AboutMeSection = styled(motion.div)`
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:2rem;
        background-color: rgba(50, 144, 159, 0.3);
        border-radius: 15px;
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
        line-height: 1.7rem;
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
           text-align:center;
        }
        span{
            color: #2D9E4A;
            background: rgba(50,50,50,0.74);
            border-radius: 10px;
        }
        @media (max-width: 600px){
            width: 85%;
            padding:0;
            h1{
                font-size: 1.7rem;
            }
            h2{
                font-size: 1.5rem;
            }
            p{
                font-size: 1rem;
                text-align: center;
            }
        }
    `;


        export const ImageMe = styled.div`
            img{
                height: 35vh;
                margin: 1rem;
                border-radius: 15%;  
                box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
                @media (max-width: 350px){
                    
                    height:125px;
                   
                    
                    
                }
            }
        `;