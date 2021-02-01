import React from 'react';
import './App.css';

function App() {

  const [image, setImage] = React.useState(null)

  const onImageChange = event => {
    setImage(event.target.files[0])
  }

  const onImageUpload = () => {
    //const formData = new FormData();
    //formData.append("myImage", image, image.name)
    //TODO: post image to api
  }


  const imageData = () => {
    if(image){
      console.log(image)
      return (
        <div>
          <p>File name: {image.name}</p>
          <p>File type: {image.type}</p>
          <img src={URL.createObjectURL(image)} alt=""/>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <h1>Caption image</h1>
      <h3>Image uploader</h3>
      <div>
        <input type="file" onChange={onImageChange} />
        <button onClick={onImageUpload}>
          Upload
        </button>
        {imageData()}
      </div>
    </div>
  );
}

export default App;
