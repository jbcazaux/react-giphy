import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.fetchGifs = this.fetchGifs.bind(this);
  }

  updateQuery(e) {
    this.setState({query: e.target.value}, this.fetchGifs);
  }

  fetchGifs() {
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: '-',
        limit: 2,
        q: this.state.query
      }
    })
      .then(function (response) {
        return response.data;
      })

    /*fetch('http://api.giphy.com/v1/gifs/search?api_key=123&limit=2&q=' + this.state.query)
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        return response.json();
      })*/
      .then(data => {
        console.log(data.data);
        return this.setState({ results: data.data });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" value={this.state.query} onChange={this.updateQuery}/>
        </form>

        <div>
          {this.state.results.map(result => <img src={result.images.downsized.url} alt={result.title} key={result.id}/>)}
        </div>

      </div>
    );
  }
}

export default App;
