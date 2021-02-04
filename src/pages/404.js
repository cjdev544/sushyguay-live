import React from "react"
import Layout from "../components/layout"
import OtherHeader from "../components/OtherHeader"
import SEO from "../components/seo"
import QueryGaleryPage from "../queries/galery"
import { css } from '@emotion/core'

const NotFoundPage = () => { 

    const { imagenDePortada } = QueryGaleryPage() 

  return (
    <>
      <SEO 
        lang="es"
        title="404: Not found" 
      />
      <Layout>
        <OtherHeader 
            hero={ imagenDePortada }
            title={ 'Error: 404' }
        />
        <main>
            <h1
              css={ css`
                padding: 5rem;
                text-align: center;
              `}
            >
              Página no Econtrada
            </h1>
        </main>
      </Layout>
    </>
  )
}

export default NotFoundPage 
