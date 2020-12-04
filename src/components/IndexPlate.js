import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../styles/colors'
import { Link } from 'gatsby'
import fonts from '../styles/fonts'

/**
 *  Styles
 */
const Article = styled.article`
    margin: 0 auto;
    border: 1px solid ${ colors.secondary };
    background-color: #fff;
    max-width: 300px;
    box-shadow: 0px 6px 11px -6px #5B5B5B;
    transition: all .4s ease-in-out;

    &:hover {       
        box-shadow: 0px 6px 11px 3px #5B5B5B;
    }

    a { 
        color: #000; 
        text-decoration: none;
    }

    h3 {
        color: ${ colors.accent };
        font-family: ${ fonts.secondFont };
        margin: 0;
        padding: 1rem;
        font-weight: 300;
    }

    p { 
        max-width: 95%;
        font-style: italic; 
        margin: 0 auto;
    }

    .price {
        display: flex;
        justify-content: space-between;
        margin: 1rem;
        font-weight: bold;

        .ofert { color: ${ colors.accent };}
    }
`

const Btn = styled(Link)`
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    border: 2px solid ${ colors.callToAction };
    padding: .8rem 1.2rem;
    margin: 1rem;
    margin-top: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &.snipcart-add-item { color: ${ colors.callToAction }; }

    &:hover {
        background-color: ${ colors.callToAction };
        color: ${ colors.white };
    }
`

const IndexPlate = ({ plate }) => {

    const { nombreDelPlato, 
            descripcionCorta, 
            precio, 
            enOferta,
            imagenesDelPlato    
        } = plate

    const image = imagenesDelPlato[0].fluid

    return (
        <Article
            data-sal="slide-up"
            data-sal-duration="1500"
            data-sal-easing="ease"
        >
            <Image 
                fluid={ image } 
                alt={ nombreDelPlato }                      
            />
            <h3 className="title3">{ nombreDelPlato }</h3>
            <p>{ descripcionCorta }</p>
            <div className="price">
                {
                    enOferta ? (
                        <>
                            <p css={ css`text-decoration: line-through`}>Precio: { precio } €</p>
                            <p className="ofert">Oferta: { enOferta }€</p>
                        </>
                    ) : <p>Precio: { precio }€</p>
                }
            </div>
            <Btn 
                to="#"
                className="snipcart-add-item"
                data-item-id={ nombreDelPlato }
                data-item-price={ enOferta ? enOferta : precio }
                data-item-description={ descripcionCorta }
                data-item-url="http://localhost:8000/menu"
                data-item-image={ image.src }
                data-item-name={ nombreDelPlato }
            >
                Agregar al carrito
            </Btn>  
        </Article>
    )
}

export default IndexPlate
