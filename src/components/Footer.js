import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import QueryHomePage from '../queries/homePage'
import QueryFooter from '../queries/footer'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import sizes from '../styles/sizes'
import mq from '../styles/breakPoints'
import { 
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaMailBulk,
    FaWhatsapp,
    // FaTelegram,
    FaPhone
    } from 'react-icons/fa'
import CookieConsent from 'react-cookie-consent'
import Whatapp from './Whatapp'

/**
 *  Styles
 */
const FooterMain = styled.div`
    color: ${ colors.secondary };
    font-size: ${ sizes.small };
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 0;

    ${mq('min', 'medium')} {
        padding-bottom: 0;
    }
 
    h2 {
        font-family: ${ fonts.firstFont };
        font-size: ${ sizes.small };
        color: ${ colors.accent };
        text-transform: uppercase;
    }

    p {
        margin-bottom: 10px;
    }

    a {
        color: ${ colors.secondary };
        display: block;
        padding-bottom: 10px;
    }

    .colorLink {
        color: ${ colors.accent };
        font-size: 2.5rem;
        display: inline;
        margin-right: 2rem;        
    }

    .fontIcon {
        font-size: 1.5rem;
        margin-right: .6rem;
    }

    .space {
        margin-right: 1rem;
        margin-bottom: 2rem;
    }
`

const Copy = styled.div`
    font-size: ${ sizes.smaller };
    display: flex;
    justify-content: space-between;
    background-color: rgba(0,0,0,.96);
    color: ${ colors.secondary };

    p {
        margin: 0;
        padding: 1rem;
    }

    a {
        color: ${ colors.accent };
        font-size: ${ sizes.small };
        transition: all .4s ease-in-out;
        margin-left: .5rem;

        &:hover {
            color: #fff;
        }
    }
`

// const Btn = styled(Link)`
//     text-transform: uppercase;
//     text-decoration: none;
//     text-align: center;
//     background-color: transparent;
//     border: 2px solid ${ colors.callToAction };
//     color: ${ colors.callToAction };
//     padding: .8rem 1.2rem;
//     border-radius: 10px;
//     cursor: pointer;
//     transition: all .4s ease-in-out;
//     &.snipcart-summary { color: ${ colors.callToAction }; }

//     &:hover {
//         background-color: ${ colors.callToAction };
//         color: ${ colors.white };
//     }
// `

const Footer = () => {

    const year = new Date().getFullYear()

    const { nombreDeLaMarca } = QueryHomePage()

    const {
        direccion,
        telefono,
        // correo,
        whatsapp,
        paginaDeFacebook,
        paginaDeInstagram,
    } = QueryFooter()


    return (
        <footer css={ css`background-color: rgba(0,0,0,.92);`}>
            <div className="container">
                <FooterMain>
                    <div className="space">
                        <h2>Contacto</h2>
                        <p> <FaMapMarkerAlt className="fontIcon" /> { direccion }</p>
                        <p> <FaPhone className="fontIcon" /> { telefono }</p>
                        {/* <p> <FaMailBulk className="fontIcon" /> { correo }</p> */}
                    </div>
                    <div className="space">
                        <h2>Legales</h2>
                        <Link to={'/politica-privacidad'}>Política de privacidad</Link>
                    </div>
                    <div>
                        <div css={ 
                            css`display: flex;
                            margin-top: 1rem;
                            margin-bottom: 2rem;
                        `}>
                            <a 
                                href={ paginaDeInstagram } 
                                target="_blank"
                                rel="noreferrer" 
                                aria-label="Instagram"
                            >
                                <FaInstagram className="colorLink" />
                            </a>
                            <a 
                                href={ paginaDeFacebook }
                                target="_blank"
                                rel="noreferrer" 
                                aria-label="Facebook"
                            >
                                <FaFacebook className="colorLink" />
                            </a>
                            <Link 
                                to={'/contacto'}
                            >
                                <FaMailBulk className="colorLink" />
                            </Link>
                            <a 
                                href={ whatsapp }
                                target="_blank"
                                rel="noreferrer"  
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="colorLink" />
                            </a>
                            {/* <a 
                                href="/" 
                                target="_blank"
                                rel="noreferrer" 
                                aria-label="Telegram"
                            >
                                <FaTelegram className="colorLink" />
                            </a> */}
                        </div>
                        {/* <Btn to="#" className="snipcart-checkout">
                            Ver Carrito
                        </Btn> */}
                    </div>             
                </FooterMain>
            </div>
            <Copy>
                <p>Todos los derechos reervados { nombreDeLaMarca } { year } &copy;</p>
                <p>Desarrollado por <a href="/">CJDev</a></p>
            </Copy>
            <CookieConsent
                location="bottom"
                buttonText="Aceptar"
                declineButtonText="Negar"
                cookieName="gatsby-gdpr-google-analytics"
                expires={150}
            >
                Este sitio web utiliza cookies para mejorar la experiencia de usuario
            </CookieConsent> 
            <Whatapp />
        </footer>
    )
}

export default Footer