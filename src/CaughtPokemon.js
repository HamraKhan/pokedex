import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput(() => "");
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;