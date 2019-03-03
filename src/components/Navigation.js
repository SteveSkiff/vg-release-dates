import React from 'react'
import styled from 'styled-components'
import Media from './Breakpoints'

const NavContainer = styled.nav`
    background-color: lightgrey;
    margin: 0;
    padding: 8px 8px;
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
`

const Logo = styled.img`
    height: 50px;
    width: 50px;
    background-color: pink;
`

const LogoText = styled.p`
    padding-left: 8px;
`

const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: black;
    transition: 0.2s ease
    padding-bottom: 3px;
    &:hover {
        border-bottom: 3px solid red;
        padding: 0;
    }
`

const Navigation = () => (
    <header>
        <NavContainer>

            <NavList>
                <NavItem>
                    <Logo /> <LogoText>Video Game Release Dates</LogoText>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About</NavLink>
                </NavItem>
            </NavList>

        </NavContainer>
    </header>
)

export default Navigation

