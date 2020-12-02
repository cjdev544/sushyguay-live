import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Title from './Title'

/**
 *  Styled
 */
const ImgBackgroundAbaut = styled(BackgroundImage)`
        position: relative;
        width: 100%;
        height: 100vh;
        opacity: 1 !important;   
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    `


const BackgroundMobil = () => {

    const { imagenDeFondoPaginaInicio: imagen, nombreDeLaMarca, parrafoDelBanner } = QueryHomePage()

    return (
        <div>
            <ImgBackgroundAbaut tag="section" fluid={imagen.fluid}>
                <div>
                    <Title title={ nombreDeLaMarca } />
                    <p>{ parrafoDelBanner }</p>
                </div>
            </ImgBackgroundAbaut>
        </div>
    )
}

export default BackgroundMobil
