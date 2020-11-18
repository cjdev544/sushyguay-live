import { graphql, useStaticQuery } from "gatsby"


const QueryPlates = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPlato {
                nodes {
                    id
                    disponible
                    nombreDelPlato
                    descripcionCorta
                    descripcionLarga
                    precio
                    enOferta
                    imagenesDelPlato {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                    categoria {
                        categoria
                    }
                }
            }
        }
    `)

    return data.allDatoCmsPlato.nodes
}

export default QueryPlates
