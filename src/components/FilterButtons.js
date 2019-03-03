import React from 'react'
import styled from 'styled-components'
import Media from './Breakpoints'

const FilterBtn = styled.button`

`

const FilterBtnContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const FilterButtons = (props) => (
    <FilterBtnContainer>
        <FilterBtn onClick={() => props.filterFunction(146)}>Playstation 4</FilterBtn>
        <FilterBtn onClick={() => props.filterFunction(145)}>Xbox One</FilterBtn>
        <FilterBtn onClick={() => props.filterFunction(157)}>Nintendo Switch</FilterBtn>
        <FilterBtn onClick={() => props.filterFunction(117)}>3DS</FilterBtn>
        <FilterBtn onClick={() => props.filterFunction(94)}>PC</FilterBtn>
        <FilterBtn onClick={() => props.filterFunction('')}>Clear Filter</FilterBtn>
    </FilterBtnContainer>
)

export default FilterButtons;