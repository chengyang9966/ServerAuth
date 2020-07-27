import React, { Component } from 'react'; 
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';

export default class App extends Component {
    render() {
      return (
        <BrowserRouter>
        <div className="App">
          <Main />
        </div>
        </BrowserRouter>
        
      );
    }
  }
  
  