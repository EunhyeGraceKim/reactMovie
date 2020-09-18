import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name : "kimchi",
    image : "https://static.production.thenounproject.com/img/favicons/apple-touch-icon.7fb1143e988e.png"
  },
  {
    name : "veg",
    image : "https://static.production.thenounproject.com/img/favicons/favicon-32x32.015f779a87e7.png"
  },
  {
    name : "anyting",
    image : "https://static.production.thenounproject.com/img/favicons/favicon-16x16.0b6183ac3673.png"
  }
]

function App() {
  return ( 
    <div>
      {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
