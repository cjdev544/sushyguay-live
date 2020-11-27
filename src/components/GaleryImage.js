import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

const GaleryImage = ({ image, index }) => {

    return (                                  
        index !== 12 && (
            <div 
                className="img-item"
                css={ css`
                    cursor: pointer;
                    transition: all .4s ease-in-out;
                    box-shadow: 0px 6px 11px -6px #5B5B5B;
                    
                    &:hover {       
                        box-shadow: 0px 6px 11px 3px #5B5B5B;
                    }
                `}
            >
                <Image fluid={ image.fluid } alt={ image.filename } className="img-itemImage" />    
            </div> 
        )                             
    )
}

export default GaleryImage
