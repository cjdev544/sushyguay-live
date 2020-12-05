import React from 'react'
import { Helmet } from 'react-helmet'
import emotionNormalize from 'emotion-normalize'
import { css, Global } from '@emotion/core'
import colors from '../styles/colors'
import font from '../styles/fonts'
import size from '../styles/sizes'
import mq from '../styles/breakPoints'
import spaces from './spaces'

const Globals = () => { 
    return (
        <>
           <Helmet>
                <title>Sushi Guay</title>
                <styled>
                    {`
                    @font-face {
                        font-family: 'Cormorant Garamond';
                        font-style: italic;
                        font-weight: 300;
                        font-display: swap;
                        src: url(https://fonts.gstatic.com/s/cormorantgaramond/v9/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPjuz-KzhM.woff2) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }
                        @font-face {
                            font-family: 'Cormorant Garamond';
                            font-style: italic;
                            font-weight: 400;
                            font-display: swap;
                            src: url(https://fonts.gstatic.com/s/cormorantgaramond/v9/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSo.woff2) format('woff2');
                            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                        }
                        @font-face {
                            font-family: 'Cormorant Garamond';
                            font-style: normal;
                            font-weight: 300;
                            font-display: swap;
                            src: url(https://fonts.gstatic.com/s/cormorantgaramond/v9/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllfvg-I.woff2) format('woff2');
                            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                        }
                        @font-face {
                            font-family: 'Cormorant Garamond';
                            font-style: normal;
                            font-weight: 400;
                            font-display: swap;
                            src: url(https://fonts.gstatic.com/s/cormorantgaramond/v9/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2) format('woff2');
                            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                        }
                        @font-face {
                            font-family: 'Cormorant Garamond';
                            font-style: normal;
                            font-weight: 700;
                            font-display: swap;
                            src: url(https://fonts.gstatic.com/s/cormorantgaramond/v9/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fvg-I.woff2) format('woff2');
                            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                        }
                        @font-face {
                            font-family: 'Satisfy';
                            font-style: normal;
                            font-weight: 400;
                            font-display: swap;
                            src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');
                            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                        }
                    `}
                </styled>
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
                        overflow-x: hidden; 
                    }
                    body {
                        font-family: ${font.firstFont};
                        font-size: ${size.base};
                        background-color: ${ colors.primary };
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
                    h2 {
                        font-family: ${font.secondFont};
                    }
                    p {
                        margin: 0 0 20px;
                    }
                    a {
                        color: ${colors.accent};
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
                    .text-center {
                        text-align: center;
                    }

                    /* Spaces */
                    .container {
                        width: ${ spaces.width };
                        max-width: ${ spaces.maxWidth };
                        margin: 0 auto;
                    }
                    .spaceSectionDown { 
                        margin-bottom: ${ spaces.spaceSection };
                    }
                    .spaceSectionUp {
                        margin-top: ${ spaces.spaceSection };
                    }
                    .spaceTitle {
                        margin-bottom: ${ spaces.spaceTitle };
                    }
                    .backgroundNavegation {
                        background: linear-gradient(180deg, rgba(0,0,0,.8) 1%, rgba(0,0,0,.8) 70%,  rgba(0,0,0,.5) 100%);
                    }
                `}
            /> 
        </>
    )
}

export default Globals
