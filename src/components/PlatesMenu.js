import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import sizes from '../styles/sizes'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import mq from '../styles/breakPoints'

/**
 *  Styles
 */
const Article = styled.article`
    display: flex;   
    margin-bottom: 4rem; 
    width: 100%;

    ${mq('min', 'small')} {
        width: 48%;
    }

    .headerPlate {
        margin-left: 1rem;
        width: 100%;

        p { font-family: ${ fonts.secondFont }; }
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

    const {
        descripcionCorta,
        imagenesDelPlato, 
        nombreDelPlato, 
        precio, 
        enOferta 
    } = plates

    return (
        <Article>
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
            <hr/>
        </Article>
    )
}

export default PlatesMenu
