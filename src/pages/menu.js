import React from 'react'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import QueryMenuPage from '../queries/menu'
import ContentMenu from '../components/ContentMenu'

const Menu = () => {

    const data = QueryMenuPage()
    const { imagenDePortada } = data

    return (
        <Layout>
            <OtherHeader 
                hero={ imagenDePortada }
                title={ "Nuestro Menú" }
            />
            <main>
                <ContentMenu />
            </main>
        </Layout>
    )
}

export default Menu