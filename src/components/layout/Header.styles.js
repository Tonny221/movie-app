import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #030411;
`;

export const Content = styled.div`
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
        padding: 0.75rem;
        row-gap: 1rem;
    }
`;

export const Logo = styled.img`
    @media screen and (max-width: 500px){
        width: 70%
    }
`;

export const TMDBLogo = styled.img`
    width: 20%;
    @media screen and (max-width: 500px){
        width: 30%;
    }
`;