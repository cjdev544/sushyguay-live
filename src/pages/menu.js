import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import OtherHeader from '../components/OtherHeader'
import QueryMenuPage from '../queries/menu'
import QueryMenuPage from '../queries/menu'
import ContentMenu from '../components/ContentMenu'

const Menu = () => {

    const data = QueryMenuPage()
    const { tituloDePagina, imagenDePortada } = data

    const { parrafoPrincipal } = QueryMenuPage()

    return (
        <>
            <SEO 
                lang="es"
                title={ tituloDePagina } 
                description={ parrafoPrincipal }
            />
            <Layout>
                <OtherHeader 
                    hero={ imagenDePortada }
                    title={ tituloDePagina }
                />
                <main>
                    <ContentMenu />
                </main>
            </Layout>
        </>
    )
}

export default Menu