import React from 'react';
import loader from './loader.png'

export default class Gif extends React.Component {

  state = { src: loader };

  fakeImg = null;

  componentDidMount() {
    this.fakeImg = new Image();
    this.fakeImg.onload = () => this.setState({ src: this.props.gif.images.downsized.url});
    this.fakeImg.src = this.props.gif.images.downsized.url;
  }

  render() {
    return <img src={this.state.src}
                alt={this.props.gif.title}
                height={this.props.gif.images.downsized.height}
                width={this.props.gif.images.downsized.width}
    />;
  }

  componentWillUnmount() {
    this.fakeImg.onload = null;
    delete this.fakeImg;
  }
}
