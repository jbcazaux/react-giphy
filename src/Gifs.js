import React from 'react';
import Gif from "./Gif";

export default ({gifs}) => (
    <div className="gifs">
      {gifs.map(gif => <Gif gif={gif} key={gif.id}/>)}
    </div>
)