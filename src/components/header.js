import React from 'react'
import BackgroundPage from './BackgroundPage'
import BackgroundMobil from './BackgroundMobil'

const Header = () => {

    const widthWindow = window.screen.width

    return (
        <header>
            {
                widthWindow < 768 
                    ?   <BackgroundMobil />
                    :   <BackgroundPage />
            }
        </header>
    )
}

export default Header
