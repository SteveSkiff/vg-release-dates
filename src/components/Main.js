import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Media from './Breakpoints'
import FilterButtons from './FilterButtons'
import NoImage from "../img/NoImage.png"


const MainContainer = styled.main`
    margin: 5% auto;
    padding: 0 10%;
    ${Media.phone`
        margin: 12px auto;
        padding: 0px 12px;
    `}
`

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        }

        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(filter) {
        this.setState({filter: filter})
    }

    render() {
        let filter = this.state.filter;
        const rawGameData = this.props.games;
        const filterParam = function(game) {
            return game.platform.id == filter
        }
        let gameData = (filter == '' ? rawGameData : rawGameData.filter(filterParam))
        return(
            <MainContainer>
            <FilterButtons filterFunction={this.changeFilter} />

            <p>{
                 gameData.map((game, i) =>
                    <Card key={i} gameName={gameData[i].game.name} gameImg={ (gameData[i].image.thumb_url == "https://www.giantbomb.com/api/image/scale_avatar/2853576-gblogo.png" ? NoImage : gameData[i].image.thumb_url )} gamePlatform={gameData[i].platform.name} releaseMonth={gameData[i].expected_release_month} releaseDay={gameData[i].expected_release_day} />
                 )
                 }</p>
            </MainContainer>
        )
    }

}
