import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import LogoMenu from './LogoMenu'
import styled from '@emotion/styled'
import color from '../../styles/colors'
import mq from '../../styles/breakPoints'

/**
 *  Styles
 */
const Navegation = styled.nav`
    height: 18vh;
    display: flex;
    background-color: transparent;
    position: relative;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 0;
    z-index: 2;
    align-self: center;

    ${mq('max', 'medium')} {
        border-bottom: 2px solid #33333320;
        position: sticky;
        height: 8vh;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }
`
const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 0 10vw;

    ${mq('max', 'medium')} {
        display: flex;
    }
`
const NavBox = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    ${mq('max', 'medium')} {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 10vh;
        background-color: ${color.accent};
        transition: all 0.3s ease-in;
        top: 8vh;
        left: ${props => (props.open ? "-100%" : "0")};
    }
`
const Hamburger = styled.div`
    background-color: ${color.white};
    width: 30px;
    height: 3px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: ${color.white};
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
        props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
`

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navegation>
            <Logo />
            <LogoMenu />
            <Toggle 
                navbarOpen={ navbarOpen }
                onClick={ () => setNavbarOpen( !navbarOpen )}
            >
                { navbarOpen ? <Hamburger open /> : <Hamburger /> }
            </Toggle>
            {
                navbarOpen 
                ? (
                    <NavBox>
                        <NavLinks />
                    </NavBox>
                )
                : (
                    <NavBox open>
                        <NavLinks />
                    </NavBox>
                )
            }
        </Navegation>
    )
}

export default Navbar
