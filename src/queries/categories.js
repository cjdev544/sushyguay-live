import { graphql, useStaticQuery } from "gatsby"


const QueryCategories = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsCategory {
                nodes {
                    id
                    categoria 
                }
            }
        }
    `)

    return data.allDatoCmsCategory.nodes
}

export default QueryCategories