import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import sizes from '../styles/sizes';

/**
 *  Styles
 */
const DivForm = styled.div`
    width: 70%;
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
        font-style: italic;
        color: ${ colors.callToAction };        
    }
    .fail {
        font-style: italic;
        color: red;        
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
    
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();
    // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
    const { result } = await addToMailchimp(email);
    let msg;
    if(result === 'success') {
        setEmail('');
        msg = 'Muchas gracias por suscribirte a Sushi Guay'
    }
    else {
        msg = 'Hubo un error al procesar la solicitud, intentalo de nuevo'
    }
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg);
    setStatus(result);
  };

  const handleChange = e => setEmail(e.target.value);

  return (
    <DivForm className="container spaceSectionDown">
        <h3 className="title3">Suscribete a Suchi Guay</h3>
        <form>
            <p>
                Mantente informado de nuestras promociones y de nuestros nuevos platos.
            </p>
            <div>
                <input
                    type="email"
                    onChange={handleChange}
                    value={email}
                    placeholder="Dejanos tu Correo"
                    required
                />
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
                onClick={handleSubmit}
            >
                Suscribirme
            </Btn>
        </form>
    </DivForm>
  );
}

export default SubscribeForm;