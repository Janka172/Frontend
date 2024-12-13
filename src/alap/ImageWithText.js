import React from 'react';
import './ImageWithText.css'; // CSS fájl importálása

function ImageWithText(){
  return (
    <div className="image-container">
      <h1 className="image-text">Byte Benchmark</h1>
      <img src='/kepek/fejlec.png' className='fejlec'></img>
    </div>
  );
}

export default ImageWithText;
