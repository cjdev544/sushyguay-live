import React from "react"
import Layout from "../components/layout"
import OtherHeader from "../components/OtherHeader"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <OtherHeader />
      <main>
          <h1>404</h1>
      </main>
    </Layout>
  </>
)

export default NotFoundPage 
