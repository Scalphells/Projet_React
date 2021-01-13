import React from "react";
import logoPoke from "./logo/logoPoke.png";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div2>Bienvenue dans l'application : Un jour, Un Pokémon</div2>
        <img src={logoPoke} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Home;
