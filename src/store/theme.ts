import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// This atom will store the current theme in localStorage (Persistent Atom)
export const themeAtom = atomWithStorage<"light" | "dark">("theme", "dark");

export const toggleThemeAtom = atom(null, (get, set) => {
  set(themeAtom, get(themeAtom) === "light" ? "dark" : "light");
});