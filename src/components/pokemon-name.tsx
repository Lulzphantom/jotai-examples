"use client";

import { useAtomValue } from "jotai";
import { getPokeNameAsync } from "@/store/async";

const PokemonName = () => {
  const pokemonName = useAtomValue(getPokeNameAsync);

  return (
    <span>
      Pokemon Name: <strong>{pokemonName}</strong>
    </span>
  );
};

export default PokemonName;
