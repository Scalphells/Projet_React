import React from "react";
import PokeType from "./PokeType";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function Display({ info, day, types }) {
  if (!info || !types.length) return null;

  const weekdays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const number =
    (weekdays.findIndex((weekday) => weekday === info.weekday) *
      Math.ceil(types.length / 7) +
      getRandomInt(Math.ceil(types.length / 7))) %
    types.length;

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
