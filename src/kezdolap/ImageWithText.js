import React from 'react';
import './ImageWithText.css'; // CSS fájl importálása

function ImageWithText(){
  return (
    <div className="image-container">
      <img src='fejlec.png' className='fejlec'></img>
      <h1 className="image-text">Byte Benchmark</h1>
    </div>
  );
}

export default ImageWithText;
