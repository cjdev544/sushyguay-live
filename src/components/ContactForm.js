import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import fonts from '../styles/fonts'
import colors from '../styles/colors'


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

    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        // botField: '',
        // formSending: '',
        // formSubmitted: ''
    })
    const { name, email, message } = state

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
          )
          .join("&");
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if( name.trim() === '' || email.trim() === '' || message.trim() === '' ) {
            // Todos los campos son obligatorios
            return
        }
    
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...state
          })
        })
          .then(() => {
            console.log('Mensaje enviado')
          })
          .catch((error) => { console.log(error)})
    }
    
    
    return (
        <form 
            css={ css` width: 100%;`}
            name="contacto"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="botfield"
            onSubmit={ handleSubmit }
        >
            <input 
                type="hidden" 
                name="form-name" 
                aria-hidden="true" 
                value="contacto"                     
            />            
            <InputForm 
                type="text" 
                name="name"  
                value={ name }
                onChange={ onChange }
                placeholder="Nombre"
                required                 
            />
            <InputForm 
                type="email" 
                name="email"  
                value={ email }
                onChange={ onChange }
                placeholder="Correo"
                required                 
            />
            <textarea
                name="message" 
                value={ message }
                onChange={ onChange }
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