import React from 'react'
import ContentGalery from '../components/ContentGalery'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import SEO from '../components/seo'
import QueryGaleryPage from '../queries/galery'

const Galeria = () => {
    
    const data = QueryGaleryPage()
    const { tituloDePagina, imagenDePortada } = data 

    return (
        <>
            <SEO
                lang="es"
                title={ tituloDePagina } 
                description="En esta pagina puedes ver la galería de imagenes de nuestros platos. Sushi guay tambien alimentar tu vista, buen provecho."
            />
            <Layout>
                <OtherHeader 
                    hero={ imagenDePortada }
                    title={ tituloDePagina }
                />
                <main>
                    <ContentGalery />
                </main>
            </Layout>
        </>
    )
}

export default Galeria