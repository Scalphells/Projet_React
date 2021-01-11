import "./App.css";
import React from "react";
import Front from "./Components/FrontPage";
import logoPoke from "./logo/logoPoke.png";
import HomeButton from "./test";
import { Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div2>Bienvenue dans l'application : Un jour, Un Pokémon</div2>
        <img src={logoPoke} className="App-logo" alt="logo" />
        <div3>
          Cette application vous affiche un pokemon en fonction du jour
          séléctionné
        </div3>
        <Front />
      </header>
    </div>
  );
}

export default App;
