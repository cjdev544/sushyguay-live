import React from 'react'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import QueryHomePage from "../queries/homePage"
import QueryAboutPage from "../queries/aboutPage"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../styles/colors'
import mq from '../styles/breakPoints'
import { Link } from 'gatsby'
import sizes from '../styles/sizes'

const IndexAbout = () => {

    const { imagenDeFondo, imagenQueAcompaAAlTextoNosotros: imgAbout } = QueryHomePage()
    const { parrafoPrincipal } = QueryAboutPage()
    console.log(parrafoPrincipal)

    const ImgBackgroundAbautSection = styled(BackgroundImage)`
        position: relative;
        width: 100%;
        padding: 5rem;
        opacity: 1 !important;
        background: linear-gradient(180deg, rgba(0,0,0,.8) 5%,  rgba(0,0,0,.8) 100%);    
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const Div = styled.div`
        width: 350px;
        box-shadow: -4px -4px 2px ${ colors.accent };

        ${ mq('max', 'small')} {
            display: none;
        }
    `

    const TextAbout = styled.div`
        background-color: ${ colors.accent };
        color: #fff;
        opacity: .9;
        font-style: italic;
        padding: 2rem;
        width: 45%;
        margin-left: -8rem;
        margin-top: 12rem;

        a {
            color: #fff;
        }

        ${ mq('max', 'medium')} {
            margin-top: 0;
        }
        ${ mq('max', 'small')} {
            width: 90%;
            margin: 0;
        }
    `

    return (
        <div css={ css`
            clip-path: polygon(0 9%, 100% 0, 100% 91%, 0 100%);
            overflow: hidden;
        `}>
            <ImgBackgroundAbautSection tag="section" fluid={imagenDeFondo.fluid}>
                <Div>
                    <Image fluid={ imgAbout.fluid } alt="Imagen sobre Nosotros" />
                </Div>
                <TextAbout>
                    <p>{ parrafoPrincipal }</p>
                    <Link to={'/nosotros'}>
                        Más sobre nosotros...
                    </Link>
                </TextAbout>
            </ImgBackgroundAbautSection>
        </div>
    )
}

export default IndexAbout
