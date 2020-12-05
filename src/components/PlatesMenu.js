import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import sizes from '../styles/sizes'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import mq from '../styles/breakPoints'
import { Link } from 'gatsby'

/**
 *  Styles
 */
const Article = styled.article`  
    margin-bottom: 4rem; 
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 6px 11px -6px #5B5B5B;
    border-radius: 5px;
    transition: all .4s ease-in-out;

    &:hover {       
        box-shadow: 0px 6px 11px 3px #5B5B5B;
    }

    ${mq('min', 'small')} {
        width: 48%;
    }
`

const PlateLink = styled(Link)`
    display: flex;  
    text-decoration: none;

    .headerPlate {
        margin-left: 1rem;
        width: 100%;

        p { 
            font-family: ${ fonts.secondFont }; 
            color: #000;
        }
    }

    .headerPlateMenu {
        display: flex;
        justify-content: space-between;
        
        p { 
            font-family: ${ fonts.firstFont };
            font-weight: bold;
            color: ${ colors.accent };
            margin: 0; 
            padding: 0;

            span { color: ${ colors.callToAction };}
        }
    }

    h2 {
        font-family: ${ fonts.firstFont };
        font-size: ${ sizes.title3 };
        color: ${ colors.accent };
        margin: 0;
        padding: 0;
    }
`

const PlatesMenu = ({ plates }) => {
    console.log(plates)

    const {
        slug,
        descripcionCorta,
        imagenesDelPlato, 
        nombreDelPlato, 
        precio, 
        enOferta 
    } = plates
    
    const linkPlate = '/' + slug

    return (
        <Article> 
            <PlateLink to={ linkPlate }>
                <div css={ css`
                    width: 120px;  
                    border-radius: 5px;
                    overflow: hidden;              
                `}>
                    <Image 
                        fluid={ imagenesDelPlato[0].fluid } 
                        alt={ nombreDelPlato } 
                        css={ css`height: 100%;`}    
                    />
                </div>
                <div className="headerPlate">
                    <div className="headerPlateMenu">
                        <h2>{ nombreDelPlato }</h2>
                        {
                            enOferta ?(
                                <p><span>Oferta:  { enOferta } €</span></p>
                            )
                            : (
                                <p>Precio:  { precio } €</p>
                            )
                        }
                    </div>
                    <p>{ descripcionCorta }</p>
                </div>
            </PlateLink>
        </Article>
    )
}

export default PlatesMenu
