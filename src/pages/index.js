import React from "react"
import QueryHomePage from "../queries/homePage"
import Layout from "../components/layout"
import IndexPlates from "../components/IndexPlates"
import IndexAbout from "../components/IndexAbout"
import IndexNewPlate from "../components/IndexNewPlate"

const IndexPage = () => {

  const data = QueryHomePage()
  console.log(data)

  return  (
    <Layout>
      <IndexPlates />
      <IndexAbout />
      <IndexNewPlate />
    </Layout>
  )
}

export default IndexPage
