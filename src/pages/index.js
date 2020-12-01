import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import IndexPlates from "../components/IndexPlates"
import SubscribeForm from "../components/SubscribeForm"
import IndexAbout from "../components/IndexAbout"
import IndexNewPlate from "../components/IndexNewPlate"
import IndexMap from "../components/IndexMap"

const IndexPage = () => {

  return  (
    <Layout>
      <Header />
      <main>
        <IndexPlates />
        <SubscribeForm />
        <IndexAbout />
        <IndexNewPlate />
        <IndexMap />
      </main>
    </Layout>
  )
}

export default IndexPage
