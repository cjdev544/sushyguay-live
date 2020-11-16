import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import LogoQuery from '../../queries/logo'

const LogoLink = styled(Link)`
   max-width: 60px;
   margin-top: -.8rem;
   margin-left: -1rem;

  @media (min-width: 768px) {
    max-width: 100px;
    margin-top: -1.5rem;
    margin-left: -1.6rem;
  }
`

const Logo = () => {

    const logo = LogoQuery()

    return (
        <LogoLink to={'/'}>
            <img src={logo.logotipo.fluid.src} alt="Logo Sushi Guay" />
        </LogoLink>
    ) 
}

export default Logo