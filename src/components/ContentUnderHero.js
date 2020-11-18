import React from 'react'
import mq from '../styles/breakPoints'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import colors from '../styles/colors'

const Div = styled.div`
    padding: 3rem;
    background-color: ${ colors.primary };
    width: 70%;
    margin-top: -8rem;
    z-index: 1;

    ${mq('max', 'small')} {
        width: 85%;
    }
`

const ContentUnderHero = ({ parrafoPrincipal }) => {
    return (
        <div css={ css`
            display: flex;
            justify-content: center;
            width: 100%;
        `}>
            <Div>
                <p>{ parrafoPrincipal }</p>
            </Div>
        </div>
    )
}

export default ContentUnderHero
