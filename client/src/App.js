import logo from './logo.svg';
import './App.css';
import Component from './Component';
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/cases")
    .then((res) => res.json())
    .then((data) => setData(data.message));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <script>
          {console.log(data)}
        </script>
        {!data ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{JSON.stringify(data)}</p>
            <Component />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
