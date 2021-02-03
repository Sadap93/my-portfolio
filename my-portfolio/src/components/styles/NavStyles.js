import styled from "styled-components";

export const StyledNav = styled.div`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    h1{
        cursor: pointer;
        transition: all 0.6s ease;
        &:hover{
            color:#1E7349;
            text-shadow:  6px 4px 7px rgba(140, 150, 150, 0.7);
        }
    }
    ul{
      list-style: none;
      display: flex;
      li{
      cursor: pointer;
      margin: auto;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      font-size: 1.25rem;
      transition: all 0.5s ease;
      &:hover{
          color: #1E7349;
          text-shadow:  6px 4px 7px rgba(140, 150, 150, 0.7);
      } 
      }
    }
`;