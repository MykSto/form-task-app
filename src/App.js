import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer'

const App = (props) => { 

  return (  
    <div className="App">
      <Header />
      <Body/>
      <Footer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
