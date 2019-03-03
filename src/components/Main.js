import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Media from './Breakpoints'
import FilterButtons from './FilterButtons'


const MainContainer = styled.main`
    margin: 10% auto;
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
        console.log(filter);
        const rawGameData = this.props.games;
        const filterParam = function(game) {
            return game.platform.id == filter
        }
        let gameData = (filter == '' ? rawGameData : rawGameData.filter(filterParam))
        console.log(gameData);
        return(
            <MainContainer>
            <FilterButtons filterFunction={this.changeFilter} />
            <p>This is the MAIN component, where the CARDS will be.</p>
            <p>Test: {
                 gameData.map((game, i) =>
                    <Card key={i} gameName={gameData[i].game.name} gameImg={gameData[i].image.icon_url} gamePlatform={gameData[i].platform.name} releaseMonth={gameData[i].expected_release_month} releaseDay={gameData[i].expected_release_day} />
                 )
                 }</p>
            </MainContainer>
        )
    }

}
