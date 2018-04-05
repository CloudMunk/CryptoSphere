import React, { Component } from 'react';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import './App.css';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <BrowserRouter>
            <div>
              <NavBar />
            </div>
        </BrowserRouter>
      </ParallaxProvider>
    );
  }
}

export default App;
