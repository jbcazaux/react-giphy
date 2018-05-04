import React from 'react';
import Gif from "./Gif";

export default class Gifs extends  React.Component {
  render() {
    return <div className="gifs">
      {this.props.gifs.map(gif => <Gif gif={gif} key={gif.id}/>)}
    </div>
  }
}
