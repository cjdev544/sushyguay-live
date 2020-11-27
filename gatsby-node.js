
exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsPlato {
                nodes {
                    slug
                }
            }
        }
    `)

    if(result.errors) {
        reporter.panic('No hubo resultados ', result.errors )
    }

    // No errors
    const plates = result.data.allDatoCmsPlato.nodes

    plates.forEach(plate => {
        
        actions.createPage({
            path: plate.slug,
            component: require.resolve('./src/components/PlateTemplate.js'),
            context: {
                slug: plate.slug
            }
        })  
    })
}