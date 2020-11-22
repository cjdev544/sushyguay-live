import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import IndexPlates from "../components/IndexPlates"
import SubscribeForm from "../components/SubscribeForm"
import IndexAbout from "../components/IndexAbout"
import IndexNewPlate from "../components/IndexNewPlate"

const IndexPage = () => {

  return  (
    <Layout>
      <Header />
      <main>
        <IndexPlates />
        <SubscribeForm />
        <IndexAbout />
        <IndexNewPlate />
      </main>
    </Layout>
  )
}

export default IndexPage
