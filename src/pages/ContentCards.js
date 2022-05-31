import React from 'react';
import styled from 'styled-components';

function ContentCards() {
    return (
        <ContentCardsContainer>
            <Title>Feed One</Title>
            <Title>Feed Two</Title>
        </ContentCardsContainer>
    )
}

const ContentCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Title = styled.div`
    font-size: 25px;
    padding-top: 60px;
`;

export default ContentCards