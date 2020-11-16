import React from 'react'
import Footer from './Footer'
import Header from './header'
import Navbar from './navBar/Navbar'
import Globals from '../styles/globals'

const Layout = (props) => {

    return (    
        <>
            <Globals />
            <Navbar />
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
