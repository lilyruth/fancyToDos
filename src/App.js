import React from 'react';
import "@fontsource/zen-kurenaido";
import "@fontsource/mansalva";
import WeatherWidget from './app/components/Weather';
import ToDos from './app/components/ToDos';
import Login from './app/components/Login';

// Incorporate local storage into this one? 

function App() {
  return (
    <div className='parent'>
      <div className='top'>
        <Login />
        <WeatherWidget />
      </div>
      <div className='header'>
        <h1>
        All the things
        </h1>
      </div>
        <ToDos />
    </div>
  );
}

export default App;
