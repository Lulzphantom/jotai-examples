import { atom } from "jotai";

export const counterAtom = atom(0);

export const incrementAtom = atom(null, (get, set) => {
  set(counterAtom, get(counterAtom) + 1);
});

export const decrementAtom = atom(null, (get, set) => {
  set(counterAtom, get(counterAtom) - 1);
});
