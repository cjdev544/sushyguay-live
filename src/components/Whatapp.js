import React from 'react'
import styled from '@emotion/styled'
import QueryFooter from '../queries/footer'

/**
 *  Styled
 */
const BtnWath = styled.div`
    display: block;
    width: 40px;
    height: 40px;
    color: #fff;
    position: fixed;
    right: 15px;
    bottom: 35px;
    border-radius: 50%;
    line-height: 80px;
    text-align: center;
    z-index: 999;
`

const Whatapp = () => {

    const { whatsapp } = QueryFooter()

    return (
        <BtnWath>
            <a 
                href={ whatsapp }
                target="_blank"
                rel="noreferrer" 
                aria-label="Whatsapp"
            >
                <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" alt="Icono WhatsApp" />
            </a>
        </BtnWath>
    )
}

export default Whatapp
