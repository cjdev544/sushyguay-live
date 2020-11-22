import React from 'react'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import QueryContactPage from '../queries/contact'
import QueryFooter from '../queries/footer'
import ContactForm from '../components/ContactForm'
import { css } from '@emotion/core'
import fonts from '../styles/fonts'
import styled from '@emotion/styled'
import ContentUnderHero from '../components/ContentUnderHero'
import mq from '../styles/breakPoints'
import colors from '../styles/colors'
import spaces from '../styles/spaces'
import { 
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaMailBulk,
    FaWhatsapp,
    FaPhone
    } from 'react-icons/fa'


/**
 *  Styles
 */
const Div = styled.div`
    width: 40%;
    margin-right: 3rem;
    a { 
        display: block; 
        margin-bottom: 1rem;
        font-family: ${ fonts.secondFont };
        text-decoration: none;
        transition: all .4s ease-in-out;  

        :hover {
            color: #000;
        }                          
    }

    ${mq('max', 'small')} {
        display: flex;
        justify-content: space-between;
        width: 100%;        

        h3 {
            margin-top: 0;
        }
    }
`

const Contacto = () => {

    const data = QueryContactPage()
    const { imagenDePortada, parrafoPrincipal } = data
    
    const {
        direccion,
        telefono,
        correo,
        whatsapp,
        paginaDeFacebook,
        paginaDeInstagram,
    } = QueryFooter()


    return (
        <Layout>
            <OtherHeader 
                hero={ imagenDePortada }
                title={ "Contactanos" }
            />
            <main>
                <ContentUnderHero 
                    parrafoPrincipal={ parrafoPrincipal}
                /> 
                <div
                    className="container spaceSectionDown"
                    css={ css`
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        
                        ${mq('min', 'small')} {
                            flex-direction: row;
                            width: 100%;
                            padding: 3rem;
                            border: 1px solid ${ colors.secondary };
                        }

                        ${mq('min', 'medium')} {
                            width: 70%;
                        }
                    `}
                >
                    <Div>
                        <div css={ css `
                            ${mq('max', 'small')} {
                                :first-of-type {margin-right: 1rem;}
                            }
                        `}>
                            <p> <FaMapMarkerAlt className="fontIcon" /> { direccion }</p>
                            <p> <FaPhone className="fontIcon" /> { telefono }</p>
                            <p> <FaMailBulk className="fontIcon" /> { correo }</p>
                        </div>
                        <div>
                            <h3 className="spaceSectionUp">Siguenos en Redes</h3>
                            <a 
                                href={ paginaDeFacebook }
                                target="_blank"
                                rel="noreferrer" 
                                aria-label="Facebook"
                            ><FaFacebook /> Facebook</a>
                            <a 
                                href={ paginaDeInstagram }
                                target="_blank"
                                rel="noreferrer" 
                                aria-label="Instagram"
                            ><FaInstagram /> Instagram</a>
                        </div>
                    </Div>
                    <section>
                        <h2 
                            css={ css`
                                margin-top: 0;
                                ${mq('max', 'small')} {
                                    margin-top: ${ spaces.spaceTitle };
                                }
                            `}
                            className="title2"
                        >
                            Envianos un mensaje
                        </h2>
                        <ContactForm />
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export default Contacto