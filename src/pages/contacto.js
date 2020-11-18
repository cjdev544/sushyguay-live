import React from 'react'
import Layout from '../components/layout'
import OtherHeader from '../components/OtherHeader'
import QueryContactPage from '../queries/contact'

const Contacto = () => {

    const data = QueryContactPage()
    const { imagenDePortada } = data
    
    return (
        <Layout>
            <OtherHeader 
                hero={ imagenDePortada }
                title={ "Contactanos" }
            />
            <main>
                <h1>Contacto</h1>
            </main>
        </Layout>
    )
}

export default Contacto