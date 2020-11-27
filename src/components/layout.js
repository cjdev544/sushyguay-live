import React from 'react'
import Footer from './Footer'
import Globals from '../styles/globals'
import Navbar from './navBar/Navbar'

const Layout = (props) => {

    const snipcart = document.querySelector('.snipcart .snipcart-checkout-transitions-enter')

    return (    
        <>
            <Globals />
            {
                !snipcart && (
                    <Navbar />            
                ) 
            }
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
