import React from 'react'
import QueryHomePage from "../queries/homePage"
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../styles/colors'
import mq from '../styles/breakPoints'
import Button from './Button'

const Article = styled.article`
    
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
        display: grid;
        grid-template-columns: 10;
        grid-template-rows: 10;

        .divImg {
            width: 350px;
            box-shadow: -4px 4px 2px ${ colors.accent };
            grid-column: 6/11;
            grid-row: 1/6;          
        }

        .divPositionNewPlate {
            background-color: #fff;
            padding: 2rem;
            box-shadow: 4px -4px 2px ${ colors.accent };
            grid-column: 1/9;
            grid-row: 4/11;
            z-index: 10;
        }

    }

    ${ mq('min', 'medium')} { 
        
        .divImg {
            width: 450px;
            grid-column: 6/11;
            grid-row: 1/6;
        }

        .divPositionNewPlate {
             grid-column: 1/7;
             grid-row: 3/11;
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
        <section className="container spaceSectionDown">
            <h2 className="title2 text-center">{ tituloDeSeccion }</h2>
            <Article>
                <div 
                    className='divImg'
                    data-sal="slide-left"
                    data-sal-duration="1500"
                    data-sal-easing="ease"
                >
                    <Image fluid={ image } alt={ nombreDelNuevoPlato } />
                </div>
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
