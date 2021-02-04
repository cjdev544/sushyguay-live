import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import IndexPlates from "../components/IndexPlates"
import SubscribeForm from "../components/SubscribeForm"
import IndexAbout from "../components/IndexAbout"
import IndexNewPlate from "../components/IndexNewPlate"
import IndexMap from "../components/IndexMap"
import SEO from "../components/seo"

const IndexPage = () => {

  return  (
    <>
      <SEO 
          lang="es"
          title="Inicio"
      />
      <Layout>
        {
          typeof window !== 'undefined' &&
            <Header />
        }
        <main>
          <IndexPlates />
          <SubscribeForm />
          <IndexAbout />
          <IndexNewPlate />
          {
            typeof window !== 'undefined' &&
              <IndexMap />
          }
        </main>
      </Layout>
    </>
  )
}

export default IndexPage
