import { graphql, useStaticQuery } from "gatsby"


const QueryAboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPaginaNosotro {
                nodes {
                    imagenDePortada {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                    imagen1 {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                    imagen2 {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                    parrafoPrincipal
                    parrafoSecundario
                }
            }
        }
    `)

    return data.allDatoCmsPaginaNosotro.nodes[0]
}

export default QueryAboutPage
