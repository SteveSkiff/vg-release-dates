import React from 'react'
import styled from 'styled-components'
import Media from './Breakpoints'

const CardContainer = styled.div`
    margin: 8px 0px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    background-color: lightblue;
    ${Media.phone`
        padding: 8px;
    `}
`

const CardImg = styled.img`
    max-height: 75px;
    max-width: 75px;
    padding: 8px;
    ${Media.phone`
        max-height: 75px;
        max-width: 75px;
    `}
`

const CardTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 8px;
    justify-content: center;
`

const CardText = styled.p`
    margin: 0;
    margin-bottom: ${props => props.title ? "8px" : "0"};
    padding: 0;
    font-size: ${props => props.title ? "24px" : "16px"};
    color: ${props => props.subtitle ? "grey" : "black"};
    font-weight: ${props => props.title ? "bold" : "regular"};
    ${Media.phone`
        font-size: ${props => props.title ? "16px" : "12px"};
    `}
`

const Card = (props) => (
    <CardContainer>
        
        <CardImg src={props.gameImg} />
        <CardTextContainer>
            <CardText title>{props.gameName}</CardText>
            <CardText subtitle>{props.releaseMonth && props.releaseDay !== null ? `${props.releaseMonth}/${props.releaseDay}` : "No Confirmed Date" }</CardText>
            <CardText>{props.gamePlatform}</CardText>
        </CardTextContainer>

    </CardContainer>
);

export default Card