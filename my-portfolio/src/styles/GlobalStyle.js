import {createGlobalStyle} from "styled-components";
import Planetbg from '../img/planet_4k_8k-7680x4320.jpg';



const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.App{
    position: relative;
    overflow: hidden;
}

body{
    background-image: url(${Planetbg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
    color: #fefffc;
    font-family: 'Alien';
}

p{
    font-family:'Stellar'
}


`;

export default GlobalStyle;