"use client";

import { productAtom } from "@/store/products";
import { useAtom, useSetAtom } from "jotai";

const ProductActions = () => {
  const setProduct = useSetAtom(productAtom);

  const handleChangePrice = (type: "increment" | "decrement") => {
    setProduct((prev) => ({
      ...prev,
      price: prev.price + (type === "increment" ? 10 : -10),
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <button onClick={() => handleChangePrice("increment")}>
        Increment Price
      </button>
      <button onClick={() => handleChangePrice("decrement")}>
        Decrement Price
      </button>
    </div>
  );
};

export default ProductActions;
