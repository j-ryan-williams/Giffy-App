import React from 'react';
import Gif from './Gif';
import NoGif from './NoGif';

const GifList = props => {

  const results = props.data;
  let gifs;

  if (results.length) {
    gifs = results.map(gif => <Gif url={ gif.images.fixed_width.url } key={ gif.id } />);
  } else {
    gifs = <NoGif />
  }

    return(
      <div>
        <ul className="gif-list">
          {gifs}
        </ul>
      </div>
    );
  }


export default GifList;
