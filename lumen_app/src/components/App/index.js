import "./App.css";
import React from "react";
import { useEffect } from "react";
import AddAndSearchDisplay from "../AddAndSearchDisplay";
import WebFont from "webfontloader";


/** This is the App component, the parent component of the Lumen app. It simply contains a header, footer and AddAndSearchDisplay.
 * @component
 * @returns  The app and child components. 
 */
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Big Shoulders Display", "Open Sans"],
      },
    });
  }, []);

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className="App-header">
        <h1 className="page-header">LUMEN</h1>
        <h2 className="page-subheader">ENLIGHTEN YOUR LEARNING</h2>
      </header>
      <main className="App-body">
        <AddAndSearchDisplay />
      </main>
      <footer className="footer">
        <h1>TECHTONIC</h1>
        <h2>Ground-Breaking Software Solutions</h2>
      </footer>
    </div>
  );
}

export default App;
