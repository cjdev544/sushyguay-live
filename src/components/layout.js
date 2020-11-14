import React from 'react'
import Footer from './Footer'
import Header from './header'
import Globals from '../styles/globals'

const Layout = (props) => {

    return (    
        <>
            <Globals />
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
