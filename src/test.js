import React from "react";
import { useHistory } from "react-router-dom";
import Front from "./Components/FrontPage";

export default function HomeButton() {
  let history = useHistory();

  const redirect = () => {
    history.push("/Front");
  };

  return (
    <div>
      <button type="button" onClick={redirect}>
        redirect
      </button>
    </div>
  );
}
