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
                <h5 style={{ 
                       display: 'flex', 
                       justifyContent: 'center', 
                       color: '#a2b9bc', 
                       fonFamily: 'Great Vibes', 
                       fontWeight: 'bold'}}
                       >  Everything Crypto --- In one place 
                       </h5>
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
