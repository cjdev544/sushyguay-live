import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import QueryCategories from '../queries/categories'
import QueryMenuPage from '../queries/menu'
import QueryPlates from '../queries/plates'
import mq from '../styles/breakPoints'
import ContentUnderHero from './ContentUnderHero'
import PlatesMenu from './PlatesMenu'

/**
 *  Styles
 */
const MenuFilter = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
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
   }


    return (
        <>
            <ContentUnderHero 
                parrafoPrincipal={ parrafoPrincipal }
            /> 
            <nav>
                <MenuFilter>
                    <li>
                        <button
                            onClick={ (e) => filterSelector(e) }
                            value={"Todos"}
                        >TODOS</button>
                    </li>
                    {                        
                        filter.categories.map(cat => (
                            <li key={ cat }>
                                <button
                                    onClick={ (e) => filterSelector(e) }
                                    value={ cat }
                                >{ cat }</button>
                            </li>
                        ))
                    }
                </MenuFilter>
                <div css={ css`
                    display: block;

                    ${mq('min', 'small')} {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }
                `}>
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
