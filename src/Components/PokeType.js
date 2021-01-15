import { useEffect, useState } from "react";
import Display from "./Display";
import PokeImage from "./PokeImage";

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
        const number = getRandomInt(data.pokemon.length);
        setPoke(data.pokemon[number]);
      });
  }, [url]);

  if (!poke)
    return (
      <div>
        <br></br>Aucun pokemon n'appartient à ce type :(<br></br>
      </div>
    );
  console.log("URL2 : ", poke.pokemon.url);
  return (
    <>
      <div>
        <br></br>
        Voici votre pokemon : {poke.pokemon.name}
        <PokeImage url={poke.pokemon.url} />
        <br></br>
      </div>
    </>
  );
}
