import React from 'react'
import { css, Global } from '@emotion/core'
import { Helmet } from 'react-helmet'
import emotionNormalize from 'emotion-normalize'
import color from '../styles/colors'
import font from '../styles/fonts'
import size from '../styles/sizes'
import mq from '../styles/breakPoints'

const Globals = () => { 
    return (
        <>
           <Helmet>
                <title>Sushi Guay</title>
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Satisfy&display=swap" rel="stylesheet"/>
                <link href="dist/hamburgers.css" rel="stylesheet"/>
            </Helmet>

            <Global 
                styles={css`
                    /* Normalize */
                    ${emotionNormalize}

                    *,
                    *::before,
                    *::after {
                        box-sizing: border-box;
                    }

                    html {
                        font-size: 62.5%;
                        font-family: ${font.firstFont};
                    }
                    body {
                        font-family: serif;
                        font-size: ${size.base};
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    img {
                        max-width: 100%;
                    }
                    h1 {
                        font-family: ${font.secondFont};
                        font-size: ${size.title1};
                        line-height: 1.5;
                        margin: 0;

                        ${mq('max', 'medium')} {
                            font-size: ${size.title1Mobil};
                        }                        
                    }
                    p {
                        margin: 0 0 20px;
                    }
                    a {
                        color: ${color.accent};
                    }

                    /* Typography */
                    .title1 {
                        font-size: ${size.title1};
                        line-height: 1.5;
                    }
                    .title2 {
                        font-size: ${size.title2};
                        line-height: 1.1;
                        margin-bottom: 20px;
                    }
                    .title3 {
                        font-size: ${size.title3};
                        line-height: 1.1;
                    }
                    .small {
                        font-size: ${size.small};
                        line-height: 1.5;
                    }
                    .smaller {
                        font-size: ${size.smaller};
                        line-height: 1.5;
                    }
                `}
            /> 
        </>
    )
}

export default Globals
