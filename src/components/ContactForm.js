import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import fonts from '../styles/fonts'
import colors from '../styles/colors'
import sizes from '../styles/sizes';


/**
 *  Styles
 */
const Form = styled.form`
    span { display: block };
    
    .success {
        font-size: ${ sizes.title3 };
        background-color: ${ colors.callToAction };
        color: ${ colors.white }; 
        padding: 1rem;
        margin: 0.5rem;       
        display: block;
        font-style: italic;
    }
    .fail {
        font-size: ${ sizes.title3 };
        color: red;
        padding: 1rem;
        margin: 0.5rem;
        display: block;
        font-style: italic;       
    }
`

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
        phone: '',
        message: '',
        status: '',
        msg: ''
    })
    const { name, email, phone, message, status, msg } = state

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

        // Netlify    
        const form = e.target
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...state
          })
        })
          .then(() => {            
            setState({
                name: '',
                email: '',
                phone: '',
                message: '',
                status: 'success',
                msg: 'El mensaje fue enviado con exito'
            })
          })
          .catch((error) => {
            setState({
                name: '',
                email: '',
                phone: '',
                message: '',
                status: 'fail',
                msg: 'El mensaje no pudo ser enviado. Intentelo nuevamente'
            })
          })

        // MailChimp
        await addToMailchimp(email, {
            FNAME: name,
            phone: phone 
          })
    }
    
    
    return (
        <Form 
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
            <InputForm 
                type="text" 
                name="phone"  
                value={ phone }
                onChange={ onChange }
                placeholder="Teléfono"                
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
            <label htmlFor="acceptsconsentcheckbox"> He leído y acepto la <Link to={'/politica-privacidad'}>política de privacidad</Link></label>
            <span
                status={status}
                className={
                    status === 'success' ? "success" : "fail"
                }
            >
                { msg }
            </span>
            <Btn
                type="submit"
            >Enviar Mensaje</Btn>
        </Form>
    )
}

export default ContactForm
