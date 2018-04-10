import React, { Component } from 'react';
import NavBar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Image } from 'react-bootstrap';


import './App.css';

class App extends Component {
  render() {
    return (

      <ParallaxProvider>
      <div style={{width: 'auto', heigth: '50'}}>
                <Image 
                 
                  src="https://i.imgur.com/I4xPuBS.jpg">
                </Image>
                <h1>The best place for everything Crypto</h1>
      </div>
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
