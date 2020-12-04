import React, { useState } from 'react'
import styled from '@emotion/styled'
import Logo from './Logo'
import NavLinks from './NavLinks'
import color from '../../styles/colors'
import mq from '../../styles/breakPoints'

/**
 *  Styles
 */
const Navegation = styled.nav`
    height: 12vh;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 0;
    z-index: 10;
    align-self: center;

    ${mq('max', 'medium')} {
        border-bottom: 2px solid #333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 5rem;
        top: 0;
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
    flex-wrap: wrap;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    ${mq('max', 'medium')} {
        flex-direction: column;
        position: fixed;
        width: 100%;
        justify-content: flex-start;
        padding-top: 10vh;
        /* Color Hamburger background menu */
        background: rgba(0,0,0,.95);
        transition: all 0.3s ease-in;
        top: 5rem;
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
        <Navegation id="navegation">
            <Logo />
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
