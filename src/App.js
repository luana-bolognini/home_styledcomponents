import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';
import Global from './theme/global.js';


function App() {
  return (
    
    <React.Fragment>
          <Global/>
          <Header/>
          <Content/>
          <Footer/>
    </React.Fragment>

);
}

export default App;
