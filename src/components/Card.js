import React from 'react'
import styled from 'styled-components'
import Media from './Breakpoints'

const CardLink = styled.a`
    color: inherit;
    text-decoration: none;
`

const CardTextWrapper = styled.span`
    border-bottom: 1px solid #c6c6c6;
`

const CardContainer = styled.div`
    margin: 8px 0px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5), 0px 0px 10px 1px rgba(0,0,0,0.1);
    background-color: ${({Console}) =>
        Console == 'PlayStation 4' && '#2458B3' ||
        Console == 'Xbox One' && '#2E9A2E' ||
        Console == 'Nintendo Switch' && '#FF4D59' ||
        Console == 'Nintendo 3DS' && '#FF444B' ||
        '#2B2B2B'
    };
    transition: 0.2s ease;
    &:hover {
        transition: 0.2s ease;
        background-color: ${({Console}) =>
        Console == 'PlayStation 4' && '#003791' ||
        Console == 'Xbox One' && '#107c10' ||
        Console == 'Nintendo Switch' && '#e60012' ||
        Console == 'Nintendo 3DS' && '#CE181E' ||
        '#000000'
    };

    ${Media.phone`
        padding: 8px;
    `};
`

const CardImg = styled.img`
    padding: 8px;
    align-self: center;
    max-height: 100px;
    max-width: 75px;
    border-radius: 10px;
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
    margin-bottom: ${props => props.title ? "4px" : "0"};
    padding: 0;
    padding-bottom: ${props => props.title ? "-2px" : "0"};
    align-self: ${props => props.release ? "center" : "top"};
    margin-left: ${props => props.release ? "auto" : "0"};
    font-size: ${props => props.title ? "20px" : "14px"};
    color: ${({Console}) =>
        Console == 'PlayStation 4' && '#ffffff' ||
        Console == 'Xbox One' && '#f1f1f1' ||
        Console == 'PC' && '#ffffff' ||
        Console == 'Nintendo Switch' && 'white' ||
        Console == 'Nintendo 3DS' && 'white' ||
        'white'
    };
    font-weight: ${props => props.title ? "bold" : "regular"};
    text-shadow: ${({Console}) =>
        Console == 'PlayStation 4' && '0px 1px 2px #000000' ||
        Console == 'Xbox One' && '0px 1px 2px #000000' ||
        Console == 'PC' && '#000000' ||
        Console == 'Nintendo Switch' && '0px 1px 2px #963E3E' ||
        Console == 'Nintendo 3DS' && '0px 1px 2px #963E3E' ||
        'black'
        };
    ${Media.phone`
        font-size: ${props => props.title ? "20px" : "14px"};
    `};
`

const CardDate = styled(CardText)`
    font-size: 24px;
    padding-right: 12px;
    ${Media.phone`
        font-size: 24px;
    `};
`

const Card = (props) => (
    <CardLink href={`https://www.google.com/search?q=${props.gameName} ${props.gamePlatform}`} target="_blank">
        <CardContainer Console={props.gamePlatform}>
            
            <CardImg src={props.gameImg} />
            <CardTextContainer>
                <CardText title Console={props.gamePlatform}><CardTextWrapper>{props.gameName}</CardTextWrapper></CardText>
                <CardText>{props.gamePlatform}</CardText>
            </CardTextContainer>
            <CardDate release Console={props.gamePlatform}>{props.releaseMonth && props.releaseDay !== null ? `${props.releaseMonth}/${props.releaseDay}` : "N/A" }</CardDate>

        </CardContainer>
    </CardLink>
);

export default Card