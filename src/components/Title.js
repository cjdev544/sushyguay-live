import React from 'react'
import { css } from '@emotion/core'
import colors from '../styles/colors'

const Title = ({title}) => {
    return (
        <h1 css={ css`        
            text-shadow: -2px 2px 3px ${ colors.accent };
            text-align: center;
        `}>
            { title }
        </h1>
    )
}

export default Title
