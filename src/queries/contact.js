import { graphql, useStaticQuery } from "gatsby"


const QueryContactPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPaginaContacto {
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

    return data.allDatoCmsPaginaContacto.nodes[0]
}

export default QueryContactPage