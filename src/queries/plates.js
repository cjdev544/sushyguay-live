import { graphql, useStaticQuery } from "gatsby"


const QueryPlates = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPlato {
                nodes {
                    id
                    slug
                    disponible
                    nombreDelPlato
                    descripcionCorta
                    descripcionLarga
                    precio
                    enOferta
                    imagenesDelPlato {
                        originalId
                        filename
                        fluid (maxWidth: 100){
                            src
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
