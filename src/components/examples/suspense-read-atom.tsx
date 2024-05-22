"use client";

import { Suspense } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { currentPokeIdAtom, setNextPokeIdAtom } from "@/store/async";
import ExampleContainer from "../example-container";
import PokemonName from "../pokemon-name";

const SuspenseReadAtom = () => {
  const currentPokeId = useAtomValue(currentPokeIdAtom);
  const setNextId = useSetAtom(setNextPokeIdAtom);

  return (
    <ExampleContainer title="Suspense Read">
      <div className="flex flex-col gap-2">
        <button onClick={setNextId}>Next Pokemon</button>
        <span>
          Current Pokemon Id: <strong>{currentPokeId}</strong>
        </span>
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonName />
        </Suspense>
      </div>
    </ExampleContainer>
  );
};

export default SuspenseReadAtom;
