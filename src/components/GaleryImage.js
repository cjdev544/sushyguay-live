import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const GaleryImage = ({ image, index }) => {

    if(index === 12) return null

    return (
        <>                           
            <div 
                className="img-item"
                css={ css`
                    cursor: pointer;
                    transition: all .4s ease-in-out;
                    :hover {transform: scale(1.01)}
                `}
            >
                <Image fluid={ image.fluid } alt={`Imagen de galería número ${index}`} className="img-itemImage" />    
            </div>                      
        </>
    )
}

export default GaleryImage
