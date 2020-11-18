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
        height: 65vh;
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

const BackgroundPages = ({ hero, title }) => {    

    return (
        <div css={ css`
            clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
            overflow: hidden;
        `}>
            <ImgBackgroundAbaut tag="section" fluid={hero.fluid}>
                <Title title={ title } />
            </ImgBackgroundAbaut>
        </div>
    )
}

export default BackgroundPages