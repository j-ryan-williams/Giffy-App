import React, { Component } from 'react';
import './App.css';
import GifList from './Components/GifList.js';
import SearchForm from './Components/SearchForm.js';
import axios from 'axios';
import config from './config';


class App extends Component {
  constructor() {
    super();
      this.state = {
        gifs: [],
        loading: true
      };
    }

    componentDidMount() {
      axios.get('https://api.giphy.com/v1/gifs/trending?api_key=' + config.apiKey + '&limit=24&rating=G')
      .then(res => {
        this.setState({
          gifs: res.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data',error);
      });
    }

    searchGifs = (query) => {
      axios.get('https://api.giphy.com/v1/gifs/search?api_key=' + config.apiKey + '&q=' + query + '&limit=48&offset=0&rating=G&lang=en')
      .then(res => {
        this.setState({
          gifs: res.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data',error);
      });
    }

    render() {
      return (
        <div className="App">
          <div className="main-header">
            <div className="inner">
              <h1 className="main-title">GIF FINDER</h1>
              <SearchForm onSearch={ this.searchGifs }/>
            </div>
          </div>
          <div className="main-content">
            {
              (this.state.loading) ? <p>Loading...</p> : <GifList data={ this.state.gifs }/>
            }
        </div>
      </div>
    );
  }
}

export default App;
