import styled from "styled-components";

export const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 25px;
background: #282828;
color: #fefffc;
/* position: absolute; */

/* bottom: -4vh; */
width: 100%;
p{
    font-family: 'Alien';
    letter-spacing:2px;
    
    @media (max-width:600px){
        font-size:0.7rem;
    }
    @media (max-width: 350px){
        letter-spacing: 1.4px;
    }
}
a{
    text-decoration:none;
    color:red;
    transition: all 0.5s ease;
    &:hover{
        text-shadow:2px 2px 2px red;
    }
}
`;