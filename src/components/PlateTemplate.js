import React from 'react'
import Image from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader' 
import ContentUnderHero from './ContentUnderHero'
import styled from '@emotion/styled'
import mq from '../styles/breakPoints'
import { css } from '@emotion/core'
import sizes from '../styles/sizes'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export const query = graphql`
    query($slug: String!) {
        allDatoCmsPlato(filter: {slug: {eq: $slug}}) {
            nodes {
                nombreDelPlato
                descripcionLarga
                descripcionCorta
                precio
                enOferta
                imagenesDelPlato {
                    fluid {
                        src
                        ...GatsbyDatoCmsFluid_tracedSVG
                    }
                }
            }
        }
    }
`

/**
 *  Styles
 */
const DivImage = styled.div` 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

.imgPlate { 
    box-shadow: -4px 4px 2px ${ colors.accent };
    object-fit: cover;
    object-position: center center;
}

    ${ mq('max', 'medium')} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${ mq('max', 'small')} {
        display: block;

        .imgPlate {
            margin: 2rem;
        }
    }

    .price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p { font-size: ${ sizes.title3 }}

        .ofert { 
            font-size: ${ sizes.title2 };
            color: ${ colors.accent };
        }
    }
`

// const Btn = styled(Link)`
//     text-transform: uppercase;
//     text-decoration: none;
//     text-align: center;
//     background-color: transparent;
//     border: 2px solid ${ colors.callToAction };
//     color: ${ colors.callToAction };
//     padding: .8rem 1.2rem;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all .4s ease-in-out;
//     &.snipcart-add-item { color: ${ colors.callToAction }; }

//     &:hover {
//         background-color: ${ colors.callToAction };
//         color: ${ colors.white };
//     }
// `


const PlateTemplate = ({ data }) => {

    const {
        nombreDelPlato,
        descripcionLarga,
        descripcionCorta,
        precio,
        enOferta,
        imagenesDelPlato
    } = data.allDatoCmsPlato.nodes[0]

    return (
        <Layout>
            <OtherHeader 
                hero={ imagenesDelPlato[0] }
                title={ nombreDelPlato }
            />
            <main>
                <ContentUnderHero 
                    parrafoPrincipal={ descripcionLarga }
                />
                <DivImage className="container spaceSectionDown ">
                    <div className="price">
                        <div>
                            {
                                enOferta ? (
                                    <>
                                        <p css={ css`text-decoration: line-through`}>Precio: { precio } €</p>
                                        <p className="ofert">Oferta: { enOferta }€</p>
                                    </>
                                ) : <p className="ofert">Precio: { precio }€</p>
                            }
                        </div>
                        {/* <Btn 
                            to='#'
                            className="snipcart-add-item"
                            data-item-id={ nombreDelPlato }
                            data-item-price={ enOferta ? enOferta : precio }
                            data-item-description={ descripcionCorta }
                            data-item-url="http://localhost:8000/menu"
                            data-item-image={ imagenesDelPlato[0].fluid.src }
                            data-item-name={ nombreDelPlato }
                        >
                            Agregar al carrito
                        </Btn> */}
                    </div>
                    {
                        imagenesDelPlato.map((image, index) => (
                            <div 
                                key={ index }  
                                className="imgPlate"
                            >
                                <Image                                        
                                    fluid={ image.fluid } 
                                    alt={ image.filename } 
                                />
                            </div>
                        ))
                    }
                    <Link 
                        to={'/menu'}
                        css={ css`
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-family: ${ fonts.secondFont };
                            font-size: ${ sizes.title3 };
                            background-color: ${ colors.secondary };
                            text-decoration: none;
                            transition: all .4s ease-in-out;

                            span {
                                font-size: 4rem;
                                margin-right: 1rem;
                            }

                            :hover { color: #000; }
                        `}
                    ><span>&#x2ba8;</span> Regresar al Menú</Link>
                </DivImage> 
            </main>
        </Layout>
    )
}

export default PlateTemplate
