import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import QueryHomePage from '../queries/homePage'
import Title from './Title'

/**
 *  Styled
 */
const ImgBackgroundMobil = styled(BackgroundImage)`
        position: relative;
        width: 100%;
        height: 100vh;
        opacity: 1 !important;   
        background: linear-gradient(180deg, rgba(0,0,0,.55) 5%,  rgba(0,0,0,.75) 100%); 
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    `


const BackgroundMobil = () => {

    const { imagenDeP, nombreDeLaMarca, parrafoDelBanner } = QueryHomePage()

    return (
        <div>
            <ImgBackgroundMobil tag="section" fluid={imagenDeP.fluid}>
                <div 
                    className="container"
                    css={ css`
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        p { 
                            color: #fff; 
                            text-align: center;
                        }                    
                    `}
                >
                    <Title title={ nombreDeLaMarca } />
                    <p>{ parrafoDelBanner }</p>
                </div>
            </ImgBackgroundMobil>
        </div>
    )
}

export default BackgroundMobil
