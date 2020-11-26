import React from 'react'
import { css } from '@emotion/core'
import InfoMap from './InfoMap'
import QueryHomePage from '../queries/homePage'

const IndexMap = () => {

    const { tituloDeMapa, parrafoDeMapa } = QueryHomePage()

    return (
        <section className="container spaceSectionDown">
            <h2
                css={ css`text-align: center;`}
            >
                { tituloDeMapa }
            </h2>
            <p>
                { parrafoDeMapa }
            </p>
            <div css={ css`height: 350px;`}>
                <InfoMap />
            </div>
        </section>
    )
}

export default IndexMap
