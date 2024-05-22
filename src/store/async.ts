import { atom } from "jotai";

export const currentPokeIdAtom = atom(1);

// This atom will increment the current pokemon id
export const setNextPokeIdAtom = atom(null, (get, set) => {
  const currentId = get(currentPokeIdAtom);
  set(currentPokeIdAtom, currentId + 1);
});

// This atom will fetch the name of the current pokemon
export const getPokeNameAsync = atom(async (get) => {
  const id = get(currentPokeIdAtom);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data.name;
});