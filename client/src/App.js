import './App.css';

import React from "react";
import Cases from './Cases';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Menu />
          <Cases />      
        </div>
      </header>
    </div>
  );
}

export default App;