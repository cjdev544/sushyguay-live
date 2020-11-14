import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const LogoLink = styled(Link)`

    margin-left: -2rem;
    margin-top: -2rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const LogoMenu = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "logo.png"} ) {
          sharp: childImageSharp {
            fluid(maxWidth: 150, pngQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <LogoLink to={'/'}>
            <img src={image.sharp.fluid.src} alt="Logo Sushi Guay" />
        </LogoLink>
    )
}

export default LogoMenu