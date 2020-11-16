import React from 'react'
import styled from '@emotion/styled'
import colors from '../styles/colors'

const Button = ({ text }) => {

    const Btn = styled.button`
        text-transform: uppercase;
        background-color: transparent;
        border: 2px solid ${ colors.callToAction };
        color: ${ colors.callToAction };
        padding: .8rem 1.2rem;
        border-radius: 10px;
        cursor: pointer;
        transition: all .4s ease-in-out;

        &:hover {
            background-color: ${ colors.callToAction };
            color: ${ colors.white };
        }
    `

    return (
        <Btn>
            { text }
        </Btn>
    )
}

export default Button
