import React from 'react'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import QueryMenuPage from '../queries/menu'
import ContentMenu from '../components/ContentMenu'

const Menu = () => {

    const data = QueryMenuPage()
    const { tituloDePagina, imagenDePortada } = data

    return (
        <Layout>
            <OtherHeader 
                hero={ imagenDePortada }
                title={ tituloDePagina }
            />
            <main>
                <ContentMenu />
            </main>
        </Layout>
    )
}

export default Menu