import { graphql, useStaticQuery } from "gatsby"


const QueryMenuPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPaginaMenu {
                nodes {
                    imagenDePortada {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }      
                    parrafoPrincipal
                }
            }
        }
    `)

    return data.allDatoCmsPaginaMenu.nodes[0]
}

export default QueryMenuPage
