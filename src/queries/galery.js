import { graphql, useStaticQuery } from "gatsby"


const QueryGaleryPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPaginaGalery {
                nodes {
                    imagenDePortada {
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    } 
                    parrafo
                    fotosDeLaGaleria {
                        originalId
                        filename
                        fluid {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                }
            }
        }
    `)

    return data.allDatoCmsPaginaGalery.nodes[0]
}

export default QueryGaleryPage
