import Weather from "./Weather.js";
import React from "react";

export default function Front() {
  return (
    <div className="Front">
      <header className="Front-header">
        <Weather />
      </header>
    </div>
  );
}
