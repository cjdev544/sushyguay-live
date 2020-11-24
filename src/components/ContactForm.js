import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


/**
 *  Styles
 */
const InputForm = styled.input`
    font-family: ${ fonts.firstFont };
    line-height: 3rem;
    padding-left: 1rem;
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    :focus {outline: none;box-shadow: none;} 
`

const Btn = styled.button`
        text-transform: uppercase;
        background-color: transparent;
        border: 2px solid ${ colors.accent };
        color: ${ colors.accent };
        padding: .8rem 1.2rem;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        width: 100%;
        margin-top: 1rem;
        transition: all .4s ease-in-out;

        &:hover {
            background-color: ${ colors.accent };
            color: #fff;
        }
    `

const ContactForm = () => {
    return (
        <form css={ css`
            width: 100%;
        `}>
            <InputForm 
                type="text" 
                name="name"  
                placeholder="Nombre"
                required                 
            />
            <InputForm 
                type="email" 
                name="email"  
                placeholder="Correo"
                required                 
            />
            <textarea
                name="message" 
                placeholder="Escribe tu mensaje" 
                rows="8"
                required
                css={ css`
                    padding: 1rem;
                    font-family: ${ fonts.firstFont };
                    width: 100%;    
                `}
            ></textarea>
            <input
                type="checkbox"
                name="acceptsconsentcheckbox"
                required
            />
            <label htmlFor="acceptsconsentcheckbox"> He leído y acepto la política de privacidad</label>
            <Btn
                type="submit"
            >Enviar Mensaje</Btn>
        </form>
    )
}

export default ContactForm


// form.form--contact
//         input(type="text" name="name" id="name" placeholder="Nombre y Apellido").form__item
//         input(type="email" name="email" id="email" placeholder="Correo Electrónico").form__item
//         textarea(name="message" id="message" placeholder="Escribe tu mensaje" rows="8").form__item
//         input(type="submit", value="Enviar").form__item.form__submit