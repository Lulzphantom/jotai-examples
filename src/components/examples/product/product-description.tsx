"use client";

import useRenderCounts from "@/hooks/use-render-counts";
import { descriptionAtom } from "@/store/products";
import { useAtomValue } from "jotai";
import React from "react";

const ProductDescription = () => {
  const description = useAtomValue(descriptionAtom);
  const renders = useRenderCounts();
  return (
    <div>
      <span>{description.name}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={description.image} alt={description.name} width={75} />
      <div className="mt-2">Renders: {renders}</div>
    </div>
  );
};

export default ProductDescription;
