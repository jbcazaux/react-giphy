import React from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './api-key';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      limit: 2,
      results: []
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.updateLimit = this.updateLimit.bind(this);
    this.fetchGifs = this.fetchGifs.bind(this);
    this.cancel = () => {};
  }

  updateQuery(e) {
    this.setState({ query: e.target.value }, this.fetchGifs);
  }

  updateLimit(e) {
    this.setState({ limit: e.target.value }, this.fetchGifs);
  }

  fetchGifs() {
    this.cancel('Canceling any on going request to giphy');
    this.state.query && axios
      .get('http://api.giphy.com/v1/gifs/search', {
        cancelToken: new axios.CancelToken(cancel => this.cancel = cancel),
        params: {
          api_key: apiKey,
          limit: this.state.limit,
          q: this.state.query
        }
      })
      .then(response => response.data)
      .then(giphy => this.setState({ results: giphy.data }))
      .catch(function (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          console.log('fetch error ', err.message);
        }
      });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" value={this.state.query} onChange={this.updateQuery}/>
          <input type="range" min={1} max={25} value={this.state.limit} onChange={this.updateLimit} />
        </form>

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
