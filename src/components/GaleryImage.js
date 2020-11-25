import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const GaleryImage = ({ image, filename, index }) => {

    return (                                  
        index !== 12 && (
            <div 
                className="img-item"
                css={ css`
                    cursor: pointer;
                    transition: all .4s ease-in-out;
                    :hover {transform: scale(1.01)}
                `}
            >
                <Image fluid={ image.fluid } alt={ image.filename } className="img-itemImage" />    
            </div> 
        )                             
    )
}

export default GaleryImage
