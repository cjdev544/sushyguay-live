import React from 'react'
import Footer from './Footer'
import Globals from '../styles/globals'
import Navbar from './navBar/Navbar'

const Layout = (props) => {
    
    window.onscroll = function() {
        
        let navegation
        let scrollY = window.scrollY
        if(scrollY >= 200) {
            if(!navegation) navegation = document.getElementById('navegation')
            navegation.classList.add('backgroundNavegation')
        }
        else {
            if(!navegation) navegation = document.getElementById('navegation')
            navegation.classList.remove('backgroundNavegation')
        }
    }

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
