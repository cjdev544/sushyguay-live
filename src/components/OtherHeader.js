import React from 'react'
import BackgroundPages from './BackgroundPages'

const OtherHeader = ({ hero, title }) => {
    return (
        <header>
            <BackgroundPages 
                hero={ hero }
                title={ title }
            />
        </header>
    )
}

export default OtherHeader
