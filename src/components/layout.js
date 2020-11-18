import React from 'react'
import Footer from './Footer'
import Globals from '../styles/globals'
import Navbar from './navBar/Navbar'

const Layout = (props) => {

    return (    
        <>
            <Globals />
            <Navbar />            
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
