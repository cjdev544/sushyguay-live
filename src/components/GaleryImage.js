import React from 'react'
import Image from 'gatsby-image'

const GaleryImage = ({ image, index }) => {

    if(index === 12) return null

    return (
        <div className="img-item">
            <Image fluid={ image.fluid } alt={`Imagen de galería número ${index}`} className="img-itemImage" />
        </div>
    )
}

export default GaleryImage
