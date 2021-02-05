import React from 'react';
import styled from "styled-components";



const Footer = () => {
    return (
        <FooterContainer>
            <p>Created and Designed by  <a href="mailto:sadap93@gmail.com">Sandor Kovacs</a> in 2021.</p>
        </FooterContainer>
    );
};

export default Footer;


export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #282828;
    color: #fefffc;
    
    margin-top: 1rem;

    p{
        font-family: 'Alien';
        letter-spacing:2px;
        
        @media (max-width:600px){
            font-size:0.7rem;
        }
    }
    
    a{
        text-decoration:none;
        color:red;
        &:hover{
            text-shadow:2px 2px 2px red
        }
        
    }
    
`;