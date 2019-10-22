import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { AnnoReact, AnnoImage } from 'react-image-annotorious'

class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Image annonation using react</h1>
        </header>
          <div>                
                <AnnoReact contextSource={this.getContextSource()}/>
                <AnnoImage imageSource="https://st2.depositphotos.com/1915171/8651/v/950/depositphotos_86518008-stock-illustration-transport-icons-car-bike-bus.jpg" imageid="0"></AnnoImage>                                
          </div>
      </div>
    </Router>
    );
  }

  getContextSource() {
    return ["Select a category", "Car", "Bus", "autorickshaw", "Bike"];
}
}

export default App;
