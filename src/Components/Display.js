import React, { useEffect, useMemo } from "react";
import PokeType from "./PokeType";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function Display({ info, day, types }) {
  let number = useMemo(() => {
    if (!info || !types.length) return null;

    return (
      (weekdays.findIndex((weekday) => weekday === info.weekday) *
        Math.ceil(types.length / 7) +
        getRandomInt(Math.ceil(types.length / 7))) %
      types.length
    );
  }, [info, types]);

  if (!info || !types.length) return null;

  return (
    <>
      {day === "tomorrow" && "Demain on sera le "}
      {day === "today" && "Aujourd'hui nous sommes le "}
      {day === "yesterday" && "Hier nous étions le "}
      {info.date}
      <PokeType url={types[number].url} />
    </>
  );
}
