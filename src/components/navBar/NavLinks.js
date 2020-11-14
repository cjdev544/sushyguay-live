import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import font from '../../styles/fonts'
import color from '../../styles/colors'

/**
 *  Styles
 */
const NavLink = styled(Link)`
    font-family: ${font.firstFont};
    text-decoration: none;
    color: ${color.white};
    font-size: 2rem;
    font-weight: 700;
    display: inline-block;
    white-space: nowrap;
    margin-left: 2vw;
    transition: all 200ms ease-in;
    position: relative;

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: ${color.accent};
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: ${color.accent};
        ::after {
        width: 100%;
        }
    }

    &.active {
        color: ${color.accent};
        ::after {
        width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 2rem;
        z-index: 6;
    }
`

const NavLinks = () => {
    return (
        <>
            <NavLink to={'/'} activeClassName="active">INICIO</NavLink>
            <NavLink to={'/nosotros'} activeClassName="active">NOSOTROS</NavLink>
            <NavLink to={'/menu'} activeClassName="active">MENÚ</NavLink>            
            <NavLink to={'/galeria'} activeClassName="active">GALERÍA</NavLink>
            <NavLink to={'/contacto'} activeClassName="active">CONTACTO</NavLink>
            <NavLink to={'/'} activeClassName="active">CARRITO</NavLink>   
        </>
    )
}

export default NavLinks
