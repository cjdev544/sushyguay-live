import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../styles/colors'
import { Link } from 'gatsby'

/**
 *  Styles
 */
const Article = styled.article`
    margin: 0 auto;
    text-align: center;
    border: 4px solid ${ colors.accent };
    margin-bottom: 2rem;
    border-radius: 15px;
    overflow: hidden;
    transition: all .4s ease-in-out;

    &:hover {       
        transform: scale(1.02);
    }

    a { 
        color: #000; 
        text-decoration: none;
    }

    h3 {
        background-color: ${ colors.accent };
        color: #fff;
        margin: 0;
        margin-bottom: 1.5rem;
        padding: 1rem;
    }

    p { 
        max-width: 95%;
        font-style: italic; 
        margin: 0 auto;
    }
`

const Fotter = styled.footer`
    display: flex;
    justify-content: space-between;
    max-width: 95%;
    margin: 1rem;    
    font-weight: bold;
    background-color: ${ colors.secondary };
    padding: 1rem;
    border-radius: 15px;

    p { font-style: normal; }

    span { 
        color: ${ colors.accent }; 
        font-size: 20px;
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
        <Article>
            <Link to={'/404'}>
                <Image 
                    fluid={ image } 
                    alt={ nombreDelPlato }                      
                />
                <h3 className="title3">{ nombreDelPlato }</h3>
                <p>{ descripcionCorta }</p>
                <Fotter>
                    <p css={ css`text-decoration: line-through`}>Precio: { precio } €</p>
                    <p>Oferta: <span>{ enOferta } €</span></p>
                </Fotter>
            </Link>
        </Article>
    )
}

export default IndexPlate
