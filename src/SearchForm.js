import React from 'react';

export class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      limit: 2
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.updateLimit = this.updateLimit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.target.value }, this.onUpdate);
  }

  updateLimit(e) {
    this.setState({ limit: e.target.value }, this.onUpdate);
  }

  onUpdate() {
    this.props.onUpdate(this.state.query, this.state.limit);
  }

  render() {
    return <form>
      <label>Recherche : <input type="text" value={this.state.query} onChange={this.updateQuery}/></label>
      <label>Nombre de resultats : <input type="range" min={1} max={25} value={this.state.limit}
                                          onChange={this.updateLimit}/></label>
    </form>;
  }
}
