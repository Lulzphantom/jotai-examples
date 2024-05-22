"use client";

import { currentPokeIdAtom } from "@/store/async";
import { useHydrateAtoms } from "jotai/utils";
import { useRouter } from "next/navigation";

type Props = {
  count: number;
};

const SSR = ({ count }: Props) => {
  useHydrateAtoms([[currentPokeIdAtom, count]], {
    dangerouslyForceHydrate: true,
  });

  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.refresh()}>Refresh</button>
    </div>
  );
};

export default SSR;
