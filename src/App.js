import React from 'react';
import './App.css';
import { SearchForm } from "./SearchForm";
import * as api from "./api";
import Gifs from "./Gifs";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.fetch = this.fetch.bind(this);
  }

  fetch(query, limit) {
    api.fetchGifs(query, limit)
      .then(results => results && this.setState({ results: results }))
      .catch(err => console.log('fetch error ', err.message));
  }

  render() {
    return (
      <div className="App">
        <SearchForm onUpdate={this.fetch}/>
        <Gifs gifs={this.state.results}/>
      </div>
    );
  }
}

export default App;
