import React, { Component, View, Text, Button, useState, useEffect } from 'react';
import { FaImage } from 'react-icons/fa'
import './styles/StyleSheet.css';
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [imageURLs, setimageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newimageURLs = [];
    images.forEach(image => newimageURLs.push(URL.createObjectURL(image)));
    setimageURLs(newimageURLs);
  }, [images])

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <div className="Container">
      <div className='Header'>
        <p style={{ fontSize: '35px' }}>Upload your image</p>
        <p>File should be Jpeg, Png,..</p>
      </div>
      <div className='DottedBox'>
        <div className='BoxText'>
          {imageURLs.map(imageSrc => <img src={imageSrc} className='BoxImage' />)}
          <div style={{ display: !!imageURLs.length ? "none" : "block" }}>
            <FaImage className='BoxIcon' />
            <p>Drag & Drop your image here</p>
          </div>
        </div>
      </div>
      <div className='Footer'>
        <p style={{ marginBottom: '20px' }}>Or</p>
        <label className='InputLabel'>
          <p>Choose a file</p>
          <input type="file" multiple accept="image/*" onChange={onImageChange} />
        </label>
      </div>

    </div>

  )
}

export default App