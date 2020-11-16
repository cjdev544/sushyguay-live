import React from 'react'
import QueryHomePage from "../queries/homePage"
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Title from './Title'

/**
 *  Styled
 */
const ImgBackground = styled(BackgroundImage)`
    position: relative;
    width: 100%;
    height: 100vh;
    opacity: 1 !important;
    background: linear-gradient(180deg, rgba(0,0,0,.55) 5%,  rgba(0,0,0,.75) 100%);    
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const BackgroundPage = () => {

    const { imagenDeFondoPaginaInicio: image, nombreDeLaMarca, parrafoDelBanner } = QueryHomePage()
    

    return (
        <ImgBackground tag="section" fluid={image.fluid}>
            <div css={ css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
            `}>
                <Title title={ nombreDeLaMarca } />
                <p css={ css`
                    text-align: center; 
                    margin-top: 4rem;
                    color: #fff;
                `}>{ parrafoDelBanner }</p>
            </div>
        </ImgBackground>
    )
}

export default BackgroundPage