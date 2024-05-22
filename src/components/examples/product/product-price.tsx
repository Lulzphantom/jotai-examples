"use client";

import useRenderCounts from "@/hooks/use-render-counts";
import { priceAtom } from "@/store/products";
import { useAtomValue } from "jotai";

const ProductPrice = () => {
  const price = useAtomValue(priceAtom);
  const renders = useRenderCounts();
  return (
    <div className="flex flex-col">
      <span>Price: ${price}</span>
      <div className="flex-1" />
      <div className="mt-2">Renders: {renders}</div>
    </div>
  );
};

export default ProductPrice;
