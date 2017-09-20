import React from 'react';

const Gif = props => {

  return(
    <li className="gif-box">
      <img src={ props.url } style={{width: 300, height: 300}} alt="" />
    </li>
  );

}

export default Gif;
