import React from 'react'
import styled from 'styled-components'
import Media from './Breakpoints'

const FilterBtn = styled.button`
    font-size: 16px;
    border: ${props => props.clear ? "none" : "1px solid black"};
    padding: 8px;
    background-color: ${props => props.clear ? "rgba(0,0,0,0.0)" : "white"};
    border-radius: 2px;
    margin: 0 8px;
    box-shadow: ${props => props.clear ? "none" : "0px 0px 2px 1px rgba(0,0,0,0.2), 0px 0px 10px 1px rgba(0,0,0,0.1)"};
    ${Media.phone`
        margin: 0;
    `}
    transition: 0.2s ease;
    &:focus {
        outline: 0;
    }
    &:hover {
        color: ${props => props.clear ? "red" : "white"};
        font-weight: ${props => props.clear ? "bold" : "regular"};
        background-color: ${({Console}) => 
            Console == 'PS4' && '#003791' ||
            Console == 'XO' && '#107c10' ||
            Console == 'NS' && '#e60012' ||
            Console == '3DS' && '#CE181E' ||
            Console == 'PC' && 'black' ||
            'rgba(0,0,0,0.0)'
        };
    }
`

const FilterBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    ${Media.phone`
    justify-content: space-evenly;
    `}
`

const FilterButtons = (props) => (
    <FilterBtnContainer>
        <FilterBtn Console={"PS4"} onClick={() => props.filterFunction(146)}>PS4</FilterBtn>
        <FilterBtn Console={"XO"} onClick={() => props.filterFunction(145)}>Xbox One</FilterBtn>
        <FilterBtn Console={"NS"} onClick={() => props.filterFunction(157)}>Switch</FilterBtn>
        <FilterBtn Console={"3DS"} onClick={() => props.filterFunction(117)}>3DS</FilterBtn>
        <FilterBtn Console={"PC"} onClick={() => props.filterFunction(94)}>PC</FilterBtn>
        <FilterBtn clear onClick={() => props.filterFunction('')}>X</FilterBtn>
    </FilterBtnContainer>
)

export default FilterButtons;