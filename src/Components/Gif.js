import React from 'react';

const Gif = props => {

  return(
    <li className="gif-box">
      <img src={ props.url } alt="" />
    </li>
  );

}

export default Gif;
