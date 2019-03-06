import React from 'react'
import Navigation from './Navigation'
import Main from './Main'
import Footer from './Footer'
import {createGlobalStyle} from 'styled-components'
import Loading from './Loading';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(to right, #CBF2F2 0%,#BCE2E2 50%,#CBF2F2 100%);
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vgData: '',
    }
  }

  componentDidMount() {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const apiKey = process.env.REACT_APP_GIANTBOMB_API_KEY;
    const url = `https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/releases/?api_key=${apiKey}&format=json&sort=release_date:asc&limit=50&filter=expected_release_month:${currentMonth},expected_release_year:${currentYear},release_date:${currentYear}-${currentMonth+1}-${currentDay}|${currentYear+1}-${currentMonth+1}-${currentDay},region:1`
    fetch(url)
    .then(response => response.json())
    .then(data => { 
      this.setState({vgData: data.results})
    })
    .catch(error => console.error(error))
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