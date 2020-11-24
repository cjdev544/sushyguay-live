import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import QueryCategories from '../queries/categories'
import QueryMenuPage from '../queries/menu'
import QueryPlates from '../queries/plates'
import mq from '../styles/breakPoints'
import ContentUnderHero from './ContentUnderHero'
import PlatesMenu from './PlatesMenu'
import spaces from '../styles/spaces'
import colors from '../styles/colors'

/**
 *  Styles
 */
const MenuFilter = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    margin-bottom: ${ spaces.spaceTitle };

    ${mq('max', 'small')} {
        flex-direction: column;
        margin-bottom: 3rem;
        align-items: center;

        button { margin-bottom: 1rem; }
    }
`
const Button = styled.button`
    background-color: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    :focus {outline: none;box-shadow: none;} 
    :active {outline: none;box-shadow: none;} 
    &.btnActive { 
        color: ${ colors.accent };
        border-bottom: 3px solid ${ colors.accent };
        padding-bottom: .6rem;
        font-weight: bold;
    }
`

const ContentMenu = () => {

    const dataPlates = QueryPlates()
    const dataCategories = QueryCategories()
    const { parrafoPrincipal } = QueryMenuPage()

    // Filter plates actives
    const platesActive = dataPlates.filter(plate => plate.disponible)

    // Filter categories active
    let categoryActive = [];
    dataCategories.forEach(category => {
        const catAct = platesActive.find(plate => plate.categoria.categoria === category.categoria)

        if(catAct) categoryActive.push(category.categoria)
    });

    // State
    const [filter, setFilter] = useState({
        plates: platesActive,
        categories: categoryActive
    })


   // onClick filters
   const filterSelector = (e) => {

        if(e.target.value.toUpperCase() === 'TODOS') {            

            setFilter({
                ...filter,
                plates: platesActive
            })
        }
        else {
            const platesSelected = platesActive.filter(plates => plates.categoria.categoria.toUpperCase() === e.target.value.toUpperCase())

            setFilter({
                ...filter,
                plates: platesSelected
            })
        }
        const ButtonsFilter = document.querySelectorAll('.btnFilter')
        ButtonsFilter.forEach(btn => {
            btn.classList.remove('btnActive')
        });

        const btnLink = document.getElementById( e.target.value )
        btnLink.classList.toggle('btnActive')
   }


    return (
        <>
            <ContentUnderHero 
                parrafoPrincipal={ parrafoPrincipal }
            /> 
            <nav>
                <MenuFilter>
                    <li>
                        <Button
                            onClick={ (e) => filterSelector(e) }
                            value={"Todos"}
                            id="Todos"
                            className="btnFilter btnActive"
                        >TODOS</Button>
                    </li>
                    {                        
                        filter.categories.map(cat => (
                            <li key={ cat }>
                                <Button
                                    onClick={ (e) => filterSelector(e) }
                                    value={ cat }
                                    id={ cat }
                                    className="btnFilter"
                                >{ cat.toUpperCase() }</Button>
                            </li>
                        ))
                    }
                </MenuFilter>
                <div 
                    data-sal="fade"
                    data-sal-duration="1500"
                    data-sal-easing="ease"
                    className="container spaceSectionDown"
                    css={ css`
                        display: block;                        

                        ${mq('min', 'small')} {
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                        }
                    `}
                >
                    {
                        filter.plates.map(plate => (
                            <PlatesMenu 
                                key={ plate.id }
                                plates={ plate }
                            />
                        ))
                    }
                </div>
            </nav>
        </>
    )
}

export default ContentMenu
