import React from 'react'
import AboutContent from '../components/AboutContent'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import QueryAboutPage from '../queries/aboutPage'

const Nosotros = () => {

    const data = QueryAboutPage()
    const { tituloDePagina, imagenDePortada } = data

    return (
        <Layout>
            <OtherHeader 
                hero={ imagenDePortada }
                title={ tituloDePagina }
            />
            <main>
                <AboutContent 
                    data={ data }
                />
            </main>
        </Layout>
    )
}

export default Nosotros
