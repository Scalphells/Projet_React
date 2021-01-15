import { useEffect, useState } from "react";
import Display from "./Display";

export default function Weather() {
  let [info, setInfo] = useState(null);
  let [day, setDay] = useState("today");
  let [types, setTypes] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/`)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTypes(data.results);
      });
  }, []);
  useEffect(() => {
    fetch(`http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/${day}`)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setInfo(data);
      });
  }, [day]);

  const handleSelection = (event) => {
    setDay(event.target.value);
  };

  console.log("Print types", types);
  return (
    <>
      <Display info={info} day={day} types={types}></Display>
      <select value={day} onChange={handleSelection}>
        <option value={"tomorrow"}>{"tomorrow"}</option>
        <option value={"today"}>{"today"}</option>
        <option value={"yesterday"}>{"yesterday"}</option>
      </select>
    </>
  );
}
