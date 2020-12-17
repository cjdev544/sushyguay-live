import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import sizes from '../styles/sizes';
import mq from '../styles/breakPoints';

/**
 *  Styles
 */
const DivForm = styled.div`
    width: 80%;
    background-color: #fff;
    border: 1px solid ${ colors.secondary };
    text-align: center;
    padding: 3rem;

    h3 {
        font-family: ${ fonts.secondFont };
        color: ${ colors.accent };
        margin-top: 0;
    }

    p { font-size: ${ sizes.small }; }

    input {
        line-height: 3rem;
        padding-left: 1rem;
        display: block;
        width: 100%;
        margin-bottom: 1rem;
        :focus {outline: none;box-shadow: none;}
    }

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

    ${mq('min', 'medium')} {
        width: 55%;
    }
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
        :focus {outline: none;box-shadow: none;} 

        &:hover {
            background-color: ${ colors.accent };
            color: ${ colors.white };
        }
    `

const SubscribeForm = () => {
    
    const [status, setStatus] = useState('')
    const [message, setMessage] = useState('')
    const [user, setUser] = useState({
        email: '',
        name: ''
    })
    const { email, name } = user


    const handleChange = e => setUser({
        ...user,
        [e.target.name]: e.target.value
    })

    const handleSubmit = async e => {

        e.preventDefault();
        // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
        const { result } = await addToMailchimp(email, { FNAME: name })
        let msg;
        if(result === 'success') {
            setUser({
                email: '',
                name: ''
            });
            msg = 'Muchas gracias por suscribirte a Sushi Guay'
        }
        else {
            msg = 'Hubo un error al procesar la solicitud, intentalo de nuevo'
        }
        // Removes the HTML returned in some response messages in case of error
        setMessage(msg);
        setStatus(result);
  };


  return (
    <DivForm className="container spaceSectionDown">
        <h3 className="title3">Suscribete a Suchi Guay</h3>
        <form
            onSubmit={ handleSubmit }
        >
            <p>
                Mantente informado de nuestras promociones y de nuestros nuevos platos.
            </p>
            <div>
                <input 
                    type="text" 
                    name="name"  
                    value={ name }
                    onChange={ handleChange }
                    placeholder="Nombre"
                    required                 
                />
                <input
                    type="email"
                    name="email"
                    onChange={ handleChange }
                    value={ email }
                    placeholder="Dejanos tu Correo"
                    required
                />
                <input
                    type="checkbox"
                    name="acceptsconsentcheckbox"
                    required
                />
                <label htmlFor="acceptsconsentcheckbox"> He leído y acepto la política de privacidad</label>
                <span
                    status={status}
                    className={
                        status === 'success' ? "success" : "fail"
                    }
                >
                    {message}
                </span>
            </div>
            <Btn 
                type="submit"                 
            >
                Suscribirme
            </Btn>
        </form>
    </DivForm>
  );
}

export default SubscribeForm;