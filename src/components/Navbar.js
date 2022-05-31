import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
    return (
        <NavbarNav>
            <NavContainer>
                <LogoLink to='/'>
                    BRZ
                </LogoLink>
                <NavMenu>
                    <NavItem>
                        <NavLink to='/'>User</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/messaging'>Messaging</NavLink>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </NavbarNav>
    );
}

const NavbarNav = styled.nav`
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
    height: 80px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    height: 80px;
    max-width: 1500px;
`;

const LogoLink = styled(Link)`
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavItem = styled.div`
    height: 80px;
`;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    &:hover {
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out; 
    }
`;


export default Navbar;