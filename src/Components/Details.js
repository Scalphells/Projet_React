import React from "react";

const Details = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div3>
          Cette application vous affiche un pokemon en fonction du jour
          séléctionné.
          <br />
          <br />
          Pour cela rien de plus simple, il vous suffit de vous rendre dans
          l'onglet ... et de choisir le jour souhaité parmis la séléction.
          <br />
          <br />
          Une fois cela fait, le nom d'un pokemon générer aléatoirement vous
          sera affiché.
          <br />
          <br />
          Chaque jour correspond à trois types de pokémon :
          <br />
          <ul>
            <li>Lundi : Normal, Combat, Vol</li>
            <li>Mardi : Poison, Sol, Roche</li>
            <li>Mercredi : Insecte, Fantôme, Acier</li>
            <li>Jeudi : Feu, Eau, Plante</li>
            <li>Vendredi : Electrique, Psy, Glace</li>
            <li>Samedi : Dragon, Tenebre, fée</li>
            <li>Dimanche : Inconnu, Ombre ( en cours de dev)</li>
          </ul>
        </div3>
      </header>
    </div>
  );
};

export default Details;
