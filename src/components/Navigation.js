import React from 'react'
import styled from 'styled-components'
import Media from './Breakpoints'
import LogoImg from '../img/vgrd-logo.png'

const NavContainer = styled.nav`
    background-color: #606F73;
    margin: 0;
    padding: 8px 8px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5), 0px 0px 10px 1px rgba(0,0,0,0.1);
    ${Media.phone`
        margin-bottom: 48px;
    `}
`
const NavList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    align-items: center;
`

const NavItem = styled.li`
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: center;
    color: white;
`

const Logo = styled.img`
    height: 50px;
    width: 50px;
`

const LogoText = styled.p`
    padding-left: 8px;
`

const Navigation = () => (
    <header>
        <NavContainer>

            <NavList>
                <NavItem>
                    <Logo src={LogoImg} /> <LogoText>Video Game Release Dates</LogoText>
                </NavItem>
            </NavList>

        </NavContainer>
    </header>
)

export default Navigation

