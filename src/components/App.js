import React from 'react'
import Navigation from './Navigation'
import Main from './Main'
import Footer from './Footer'
import {createGlobalStyle} from 'styled-components'
import Loading from './Loading';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vgData: '',
      filteredData: '',
    }
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    console.log('Mounting the App component.')
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const apiKey = process.env.REACT_APP_GIANTBOMB_API_KEY;
    const url = `https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/releases/?api_key=${apiKey}&format=json&sort=release_date:asc&limit=50&filter=expected_release_month:${currentMonth},expected_release_year:${currentYear},release_date:${currentYear}-${currentMonth+1}-${currentDay}|${currentYear+1}-${currentMonth+1}-${currentDay},region:1`
    fetch(url)
    .then(response => response.json())
    .then(data => { 
      this.setState({vgData: data.results,
                    filteredData: data.results})
    })
    .catch(error => console.error(error))
  }

  filterData(filter) {
    const games = this.state.vgData;
    if (filter !== '') {
      console.log(`Running filter with ${filter} as the filter.`)
      console.log(games)
      let filteredArray = [];
      this.setState({filteredData: 
        filteredArray = games.filter(game => game.platform.name === filter)
      })
      
    } else if(filter == '') {
      this.setState({filteredData: this.state.vgData})
    }
  }

  render() {
    return(
      <div>
        <GlobalStyle />
        <Navigation />
        {this.state.vgData ? <Main games={this.state.vgData} filterGameData={this.filterData} /> : <Loading /> }
        <Footer />
      </div>
    )
  }
}


  
export default App