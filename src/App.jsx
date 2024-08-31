import React from 'react';
import Carousel from './Carousel';
import image1 from './assets/picture1.jpg';
import image2 from './assets/picture2.jpg';
import image3 from './assets/picture3.jpg';
import image4 from './assets/picture4.jpg';

const images = [
  image1, image2, image3, image4];

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-8">Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;

