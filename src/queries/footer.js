import { graphql, useStaticQuery } from "gatsby"


const QueryFooter = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsPiedDePagina {
                nodes {
                    direccion
                    telefono
                    correo
                    whatsapp
                    paginaDeFacebook
                    paginaDeInstagram
                }
            }
        }
    `)

    return data.allDatoCmsPiedDePagina.nodes[0]
}

export default QueryFooter
