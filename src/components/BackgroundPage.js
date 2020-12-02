import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import QueryHomePage from "../queries/homePage"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Title from './Title'
import sizes from '../styles/sizes'
import mq from '../styles/breakPoints'

/**
 *  Styled
 */
const ImgBackground = styled.div`
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

    const { imagenDeFondoPaginaInicio: nombreDeLaMarca, parrafoDelBanner } = QueryHomePage()

    return (
        <>
            <BackgroundSlider 
                query={useStaticQuery(graphql`
                    query {
                        backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
                            nodes {
                                relativePath
                                childImageSharp {
                                    fluid (maxWidth: 4000, quality: 100){
                                        ...GatsbyImageSharpFluid_tracedSVG 
                                    }
                                }
                            }
                        }
                    }
                `)}
                initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
                transition={4} // transition duration between images
                duration={8} // how long an image is shown
                // specify images to include (and their order) according to `relativePath`
                // images={["dog.jpg", "cat.jpg", "giraffe.jpg", "tasmanian devil.jpg", "gabe.jpg"]} 

                // pass down standard element props
                style={{
                    height: "100vh"
                }} 
            />
            <ImgBackground>
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
                        font-size: ${ sizes.title3 };
                        font-style: italic;

                        ${ mq('min', 'medium')} {
                            width: 60%;
                        }
                    `}>{ parrafoDelBanner }</p>
                </div>
            </ImgBackground>
        </>
    )
}

export default BackgroundPage