import React from 'react';
import styled from 'styled-components';


function KeyValueInputBox({ k, setK, v, setV }) {

    return (
        <Container>
            <SectionContainer>
                <Title>Name</Title>
                <TextBox value={k} onChange={e => setK(e.target.value)} />
            </SectionContainer>
            <SectionContainer>
                <Title>Value</Title>
                <TextBox value={v} onChange={e => setV(e.target.value)} />
            </SectionContainer>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 330px;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
`;

const TextBox = styled.input`

`;

export default KeyValueInputBox