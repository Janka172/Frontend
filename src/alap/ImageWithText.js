import React from 'react';
import ImageWithTextStilus from './ImageWithText.css';

function ImageWithText(){
  return (
    <div className="image-container">
      <h1 className="image-text">Byte Benchmark</h1>
      <img src='/kepek/fejlec.png' className='fejlec'></img>
    </div>
  );
}

export default ImageWithText;
