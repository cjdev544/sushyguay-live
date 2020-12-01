import { graphql, useStaticQuery } from "gatsby"


const QueryContactPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPaginaContacto {
                nodes {
                    tituloDePagina
                    imagenDePortada {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                    parrafoPrincipal
                    tituloDeMapa
                }
            }
        }
    `)

    return data.allDatoCmsPaginaContacto.nodes[0]
}

export default QueryContactPage