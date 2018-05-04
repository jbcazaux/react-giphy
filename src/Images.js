import React from 'react';

export default class Images extends  React.Component {
  render() {
    return <div>
      {this.props.gifs.map(gif => <img src={gif.images.downsized.url}
                                             alt={gif.title}
                                             key={gif.id}/>)}
    </div>
  }
}
