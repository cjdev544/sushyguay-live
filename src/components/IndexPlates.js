import React from 'react'
import QueryHomePage from "../queries/homePage"
import styled from '@emotion/styled'
import mq from '../styles/breakPoints'
import IndexPlate from './IndexPlate'

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    ${ mq('max', 'medium')} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${ mq('max', 'small')} {
        display: flex;
        flex-wrap: wrap;
    }
`

const IndexPlates = () => {

    const { tituloOfertas, platosEnOferta } = QueryHomePage()
    const platos = platosEnOferta.length

    if(platos === 0) return null

    return (
        <section className="container spaceSectionUp spaceSectionDown">
            <h2 className="title2 text-center">{ tituloOfertas }</h2>
            <Div
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-easing="ease"
            > 
            {
                platosEnOferta.map(plate => (
                <IndexPlate 
                    key={plate.id}
                    plate={plate}
                />
                ))
            }
            </Div>
        </section>
    )
}

export default IndexPlates
