import { graphql, useStaticQuery } from 'gatsby'

const QueryHomePage = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsPaginaDeInicio {
          nodes {
            nombreDeLaMarca
            parrafoDelBanner
            platosEnOferta {
              id
              nombreDelPlato
              descripcionCorta
              precio
              enOferta
              imagenesDelPlato {
                fluid {
                    ...GatsbyDatoCmsFluid_tracedSVG
                }
              }
            }
            imagenDeFondo {
              fluid {
                ...GatsbyDatoCmsFluid_tracedSVG
              }
            }
            imagenQueAcompaAAlTextoNosotros {
              fluid {
                ...GatsbyDatoCmsFluid_tracedSVG
              }
            }
            tituloDeSeccion
            nombreDelNuevoPlato
            descripcionDelPlato
            precio
            oferta
            imagenDelNuevoPlato {
              fluid {
                ...GatsbyDatoCmsFluid_tracedSVG
                src
              }
            }
          }
        }
      }
    `)

    return data.allDatoCmsPaginaDeInicio.nodes[0]
}

export default QueryHomePage
