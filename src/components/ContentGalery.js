import React from 'react'
import QueryGaleryPage from '../queries/galery'
import styled from '@emotion/styled'
import ContentUnderHero from './ContentUnderHero'
import GaleryImage from './GaleryImage'
import mq from '../styles/breakPoints'

/**
 *  Styles
 */
const ImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${mq('min', 'large')} {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 20px;
        grid-auto-flow: row dense;
        grid-auto-rows: 8em;
    }
    

    .img-item {
        width: 47vw;
        height: 47vw;

        ${mq('min', 'medium')} {
            height:31vw;
            width: 31vw;
        }
        
        ${mq('min', 'large')} {
            width: 100%;
            height: 100%;
        }

        &:nth-of-type(1) {
            grid-column: span 6;
            grid-row: span 2;
        }

        &:nth-of-type(2) {
            grid-column: 7 / 10;
        }

        &:nth-of-type(3) {
            grid-column: 7 / 10;
        }

        &:nth-of-type(4) {
            grid-column: 10 / 13;
            grid-row: 1 / 3;
        }

        &:nth-of-type(5) {
            grid-column: 1 / 4;
            grid-row: 3 / 4;
        }

        &:nth-of-type(6) {
            grid-column: 4 / 10;
            grid-row: 3 / 4;
        }

        &:nth-of-type(7) {
            grid-column: 10 / 13;
            grid-row: 3 / 4;
        }

        &:nth-of-type(8) {
            grid-column: 1 / 3;
            grid-row: 4 / 5;
        }

        &:nth-of-type(9) {
            grid-column: 3 / 6;
            grid-row: 4 / 5;
        }

        &:nth-of-type(10) {
            grid-column: 6 / 9;
            grid-row: 4 / 5;
        }

        &:nth-of-type(11) {
            grid-column: 9 / 11;
            grid-row: 4 / 5;
        }

        &:nth-of-type(12) {
            grid-column: 11 / 13;
            grid-row: 4 / 5;
        }

        .img-itemImage {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
`

const ContentGalery = () => {

    const { parrafo, fotosDeLaGaleria } = QueryGaleryPage()

    return (
        <>
            <ContentUnderHero 
                parrafoPrincipal={ parrafo }
            />   
            <ImgContainer className="container spaceSectionDown">
                {
                    fotosDeLaGaleria.map((img, index) => (
                        <GaleryImage 
                            key={ img.originalId }
                            index={ index }
                            image={ img }
                        />
                    ))
                }
            </ImgContainer>
        </>
    )
}

export default ContentGalery
