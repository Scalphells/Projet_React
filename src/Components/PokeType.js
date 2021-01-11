import { useEffect, useState } from "react";
import Display from "./Display";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function PokeType({ url }) {
  let [poke, setPoke] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        console.log("data : ", data.pokemon);
        const number = getRandomInt(data.pokemon.length);
        setPoke(data.pokemon[number]);
      });
  }, [url]);
  console.log(poke);
  console.log(url);

  if (!poke)
    return (
      <div>
        <br></br>Aucun pokemon n'appartient à ce type :(<br></br>
      </div>
    );
  return (
    <>
      <div>
        <br></br>
        Voici votre pokemon : {poke.pokemon.name}
        <br></br>
      </div>
    </>
  );
}
