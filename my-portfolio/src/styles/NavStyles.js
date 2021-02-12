import styled from "styled-components";

export const StyledNav = styled.div`

    min-height: 80px;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;
    background: #282828;
    position: fixed;
    width: 100%;
    top: 0;
    opacity: 0.7;
    z-index: 10;
   
    ul{
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .home{
          font-size: 2rem;
      }
      li{
      cursor: pointer;
      margin: auto;
      padding: 1rem 1.25rem;
      font-size: 1.25rem;
      transition: all 0.5s ease;
      &:hover{
          color: #18DA3B;
          text-shadow:  6px 4px 7px rgba(140, 150, 150, 0.7);
        }
      }
    }
    @media (max-width: 600px){
        flex-direction: column;
        min-height: 7vh;
        ul li{
            font-size: 1rem;
            padding: 0.5rem 1rem 0.5rem 1rem;
        }
        ul .home{
            font-size: 1.5rem;
        }
    }
`;

