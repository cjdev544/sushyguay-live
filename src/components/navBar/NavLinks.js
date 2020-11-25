import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import font from '../../styles/fonts'
import colors from '../../styles/colors'

/**
 *  Styles
 */
const NavLink = styled(Link)`
    font-family: ${font.firstFont};
    text-decoration: none;
    color: ${colors.white};
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
        background: ${colors.accent};        
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: ${colors.accent};
        ::after {
            width: 100%;
        }

        &:last-of-type {
            ::after {
                width: 0;
            }
        }
    }

    &.active {
        color: ${colors.accent};
        ::after {
        width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 2rem;
        z-index: 6;
    }

    &:last-of-type {
        font-size: 3rem;
        color: ${ colors.callToAction };
        margin-right: 2rem;
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
            <NavLink to="#" className="snipcart-summary snipcart-checkout">
                <FaCartArrowDown />
            </NavLink>  
             {/* <button class="snipcart-add-item"
                data-item-id="starry-night"
                data-item-price="79.99"
                data-item-url="/paintings/starry-night"
                data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                data-item-image="/assets/images/starry-night.jpg"
                data-item-name="The Starry Night">
                Add to cart
              </button> */}
        </>
    )
}

export default NavLinks
