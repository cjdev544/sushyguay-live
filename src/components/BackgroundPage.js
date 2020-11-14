import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import Navbar from './navBar/NavBar'
import { css } from '@emotion/core'

/**
 *  Styled
 */
const ImgBackground = styled(BackgroundImage)`
    position: relative;
    width: 100%;
    height: 100vh;
    opacity: 1 !important;
    background-size: cover;
    background: linear-gradient(
    130deg,
    rgba(238, 169, 64, 0.5) 99.89%,
    rgba(0, 0, 0, 0.9)
    );
    background-size: cover;
    background-attachment: fixed;
`
    /* background: linear-gradient(130deg, #d4671f, #434343); */

const BackgroundPage = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "banner.jpg"} ) {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    

    return (
        <ImgBackground tag="section" fluid={image.sharp.fluid}>
            <Navbar />
            <div css={ css`
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            `}>
                <h1>Sushi Guay</h1>
                <p>Ele mejor suchi de Malaga directo a tu casa</p>
            </div>
        </ImgBackground>
    )
}

export default BackgroundPage