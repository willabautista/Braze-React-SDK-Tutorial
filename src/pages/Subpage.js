import React from 'react';
import styled from 'styled-components';

function Subpage({ title }) {
    return (
        <>
            <Header>{title}</Header>
        </>
    )
}

const Header = styled.p`
    font-size: 30px;
    margin: 100px;
`;

export default Subpage