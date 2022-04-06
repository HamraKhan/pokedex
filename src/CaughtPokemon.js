import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const pokemonAnimals = [
    "Pikachu ",
    "Squidge ",
    "Charmander",
    "Olm",
    "Drowzee",
    "Chansey",
    "Dugong",
  ];

  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonAnimals.length);
    setCaught((x) => {
      return x.concat(pokemonAnimals[randomIndex]);
    });
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
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