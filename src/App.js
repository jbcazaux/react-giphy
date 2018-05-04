import React from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './api-key';
import { SearchForm } from "./SearchForm";
import * as api from "./api";

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
      .then(results => results && this.setState({results: results}))
      .catch(err  => console.log('fetch error ', err.message));
  }

  render() {
    return (
      <div className="App">
        <SearchForm onUpdate={this.fetch} />
        <div>
          {this.state.results.map(result => <img src={result.images.downsized.url}
                                                 alt={result.title}
                                                 key={result.id}/>)}
        </div>

      </div>
    );
  }
}

export default App;
