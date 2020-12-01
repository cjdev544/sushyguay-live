import React from 'react'
import ContentGalery from '../components/ContentGalery'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import QueryGaleryPage from '../queries/galery'

const Galeria = () => {
    
    const data = QueryGaleryPage()
    const { tituloDePagina, imagenDePortada } = data 

    return (
        <Layout>
            <OtherHeader 
                hero={ imagenDePortada }
                title={ tituloDePagina }
            />
            <main>
                <ContentGalery />
            </main>
        </Layout>
    )
}

export default Galeria