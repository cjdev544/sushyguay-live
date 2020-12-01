import { graphql, useStaticQuery } from 'gatsby'

const QueryHomePage = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsPaginaDeInicio {
          nodes {
            nombreDeLaMarca
            parrafoDelBanner
            tituloOfertas
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
            platoEnPromociN {
              nombreDelPlato
              descripcionLarga
              descripcionCorta
              precio
              enOferta
              imagenesDelPlato {
                fluid {
                  ...GatsbyDatoCmsFluid_tracedSVG
                  src
                }
              }
            }
            tituloDeMapa
            parrafoDeMapa
            coordenadasParaMapa {
              latitude
              longitude
            }
          }
        }
      }
    `)

    return data.allDatoCmsPaginaDeInicio.nodes[0]
}

export default QueryHomePage
