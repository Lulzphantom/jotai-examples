"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { counterAtom, decrementAtom, incrementAtom } from "@/store/basic";
import ExampleContainer from "../example-container";

const BasicUsage = () => {
  // Get the current value of the counter atom
  const counter = useAtomValue(counterAtom);

  // Get the set function for the increment and decrement atoms
  const increment = useSetAtom(incrementAtom);
  const decrement = useSetAtom(decrementAtom);

  return (
    <ExampleContainer title="Basic Usage">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-center">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <span>
          Current value: <strong>{counter}</strong>
        </span>
      </div>
    </ExampleContainer>
  );
};

export default BasicUsage;
