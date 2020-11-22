import React from 'react'
import Image from 'gatsby-image'
import ContentUnderHero from './ContentUnderHero'
import styled from '@emotion/styled'
import colors from '../styles/colors'
import mq from '../styles/breakPoints'

/**
 *  Styles
 */
const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mq('max', 'small')} {
        flex-direction: column;
    }
`

const ImgDiv1 = styled.div`
    width: 25%;
    box-shadow: -4px 4px 2px ${ colors.accent };
    object-fit: cover;
    object-position: center center;
    position: absolute;
    top: 0;
    right: 0;

    ${mq('max', 'medium')} {
        width: 35%;
    }
    ${mq('max', 'small')} {
        position: relative;
        order: 1;
        margin-bottom: 1rem;
    }
`

const DivP = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 8rem;
    padding-bottom: 8rem;  
    position: relative;  

    ${mq('max', 'small')} {
        width: 80%;
        padding: 0;
        order: 2;
    }

    p {
        /* padding: 5rem; */
        background-color: #fff;
        padding: 3rem;
        z-index: 1;
        border: 1px solid ${ colors.secondary };

        ${mq('max', 'small')} {
            background-color: #fff;
            margin: 0;
            text-align: center;
        }
    }
`

const ImgDiv2 = styled.div`
    width: 25%;
    box-shadow: 4px -4px 2px ${ colors.accent };
    object-fit: cover;
    object-position: center center;
    position: absolute;
    bottom: 0;
    left: 0;

    ${mq('max', 'medium')} {
        width: 35%;
    }
    ${mq('max', 'small')} {
        position: relative;
        order: 3;
        margin-top: 1rem;
    }
`


const AboutContent = ({ data }) => {

    const {
        imagen1,
        imagen2,
        parrafoPrincipal,
        parrafoSecundario
    } = data


    return (
        <>
            <ContentUnderHero 
                parrafoPrincipal={ parrafoPrincipal }
            />
            <Container className="container spaceSectionDown">
                <ImgDiv1>
                    <Image fluid={ imagen1.fluid } alt="Primera imagen sobre nosotros" />
                </ImgDiv1>
                <ImgDiv2>
                    <Image fluid={ imagen2.fluid } alt="Segunda imagen sobre nosotros" />
                </ImgDiv2>
                <DivP>
                    <p >{ parrafoSecundario }</p>
                </DivP>
            </Container>
        </>
    )
}

export default AboutContent
