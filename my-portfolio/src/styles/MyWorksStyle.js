//Import styled
import styled from "styled-components";
//Import motion
import { motion } from "framer-motion";
//Import images
import MusicPlayerBackground from '../img/musicplayer.png';
import MyPortfolioBackground from '../img/myportfolio.png';
import TodoListBackground from '../img/todolist.png';

export const ContainerMyWorks = styled.div`
   padding-top: 80px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100vh;
   width: 100%;
   
    
`;

export const PlanetWrapper2 = styled.div`
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

  export const MyWorksSatellite = styled.h1`
      margin-top: 1vh;
      text-align: center;
      padding: 5px;
      margin-bottom: 10px;
      background:rgba(168, 161, 153, 0.6);
      border-radius: 15px;
      box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
      transition: all 0.5s ease;
      cursor: pointer;
      animation:shadow 1.2s linear infinite;
        @keyframes shadow{  
            0%{text-shadow:2px 2px 2px red }
            50%{text-shadow:10px 8px 6px red }
            100%{text-shadow:2px 2px 2px red }
        }
      &:hover{
        transform: scale(1.15); 
        /* color: red; */
      }

        svg{
                animation: satelliteShadow 1.2s linear infinite;
                @keyframes satelliteShadow{
                    0%{filter:drop-shadow(2px 2px 2px red)}; 
                    50%{filter:drop-shadow(13px 8px 6px red)}; 
                    100%{filter:drop-shadow(2px 2px 2px red)}; 
                }
        }
  `;

  export const MyWorksSectionContainer = styled(motion.div)`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(93, 149, 223, 0.5);
        text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
        box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
        border-radius: 15px;
        height: 500px;
        width: 500px;
        @media (max-width: 760px){
            height: 400px;
            width: 400px;
        }
        @media (max-width: 640px){
            height: 340px;
            width: 340px;
        }
        @media (max-width: 560px){
            height:  270px;
            width:  270px;
        }
  `;

    export const MusicPlayerWrapper = styled.div`
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        height: 33.3%;
        border-radius: 15px 15px 0 0;
        background-image: url(${MusicPlayerBackground});
        background-size: cover;
        filter: grayscale(100%);
        opacity: 0.7;
        transition: all 0.4s ease;
        &:hover{
            filter: grayscale(0%);
            opacity: 1;
        }
        p{
            font-size: 2rem;
            color: black;
            padding: 5px;
            background: white;
            box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
        }
        a{
            text-decoration: none;
            background-color: black;
            padding: 4px;
            border-radius: 10px;
            border: 1px solid white; 
            color: white;
            transition: all 0.5s ease;
            cursor:pointer;
            &:hover{
                transform: scale(1.15);
                color: black;
                background-color: white;
                border: 1px solid black; 
            }
        }
        @media (max-width: 560px){
            p{
                font-size: 1rem;
            }
        }
        
        
        
    `;
    export const MyPortfoliaWrapper = styled(MusicPlayerWrapper)`
        background-image: url(${MyPortfolioBackground});
        border-radius:  0;
    `;
    export const TodoListWrapper = styled(MusicPlayerWrapper)`
        background-image: url(${TodoListBackground});
        border-radius: 0 0 15px 15px ;
    `;