import { useEffect, useState } from "react";
import Display from "./Display";

export default function PokeImage({ url }) {
  let [poke, setPoke] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setPoke(data.sprites.front_default);
      });
  }, [url]);
  console.log(poke);
  console.log(url);

  if (!poke)
    return (
      <div>
        <br></br>Aucune image :(<br></br>
      </div>
    );
  return (
    <>
      <div>
        <br />
        <img src={poke} />
        <br />
      </div>
    </>
  );
}
