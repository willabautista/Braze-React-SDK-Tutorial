import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <HeroContainer>
            <Header>HOME</Header>
            <Description>description</Description>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: contain;
`;

const Header = styled.div`
    color: #242424;
    font-size: 100px;
    margin-top: -100px;
`;

const Description = styled.div`
    margin-top: 8xp;
    color: #4d4d4d;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;


export default Home