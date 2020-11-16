import React from 'react'
import QueryHomePage from "../queries/homePage"
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../styles/colors'
import mq from '../styles/breakPoints'
import Button from './Button'

const Article = styled.article`
    overflow:auto;
    
    h3 { 
        color: ${ colors.accent }; 
        margin-top: 0;
    }

    footer {
        display: flex;
        justify-content: space-around;
        font-weight: bold;

        span { 
            color: ${ colors.accent }; 
            font-size: 20px;
        }
    }

    ${ mq('min', 'small')} {
        position: relative;

        img {
            max-width: 55%;
            max-height: 35rem;
            box-shadow: 4px 4px 2px ${ colors.accent };
        }

        .divPositionNewPlate {
            position: absolute;
            right: 0;
            top: 20rem;
            width: 60%;
            background-color: #fff;
            padding: 2rem;
            box-shadow: -4px 4px 2px ${ colors.accent };
        }

    }
`

const IndexNewPlate = () => {

    const { 
        tituloDeSeccion, 
        nombreDelNuevoPlato,
        descripcionDelPlato,
        precio,
        oferta,
        imagenDelNuevoPlato 
    } = QueryHomePage()

    const image = imagenDelNuevoPlato.fluid

    return (
        <section>
            <h2 className="title2 text-center">{ tituloDeSeccion }</h2>
            <Article>
                <Image fluid={ image } alt={ nombreDelNuevoPlato } />
                <div className="divPositionNewPlate">
                    <h3 className="title3">{ nombreDelNuevoPlato }</h3>
                    <p>{ descripcionDelPlato }</p>
                    <footer>
                        {
                            oferta 
                            ? (
                                <>
                                    <p css={ css`text-decoration: line-through`}>Precio: { precio } €</p>
                                    <p>Oferta: <span>{ oferta } €</span></p>
                                </>
                            )
                            : (
                                <p>Precio: <span>{ precio } €</span></p>
                            )
                        }
                    </footer>
                    <Button 
                        text={'Agregar al carrito'}
                    />
                </div>
            </Article>
        </section>
    )
}

export default IndexNewPlate
