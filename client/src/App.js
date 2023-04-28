import './App.css';

import React from "react";
import Component from './Component';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Menu />
          <Component />      
        </div>
      </header>
    </div>
  );
}

export default App;