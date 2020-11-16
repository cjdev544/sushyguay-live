import { graphql, useStaticQuery } from 'gatsby'

const LogoQuery = () => {
    
    const { image } = useStaticQuery(graphql`
        query {
            image: allDatoCmsLogo(filter: {slug: {eq: "logo"}})  {
                nodes {
                    logotipo {
                        fluid(maxWidth: 50) {
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                }
            }
        }
    `)
    return image.nodes[0]
}

export default LogoQuery
