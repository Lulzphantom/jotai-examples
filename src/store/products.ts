
import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import deepEquals from "fast-deep-equal";

const iphone = {
  name: "iPhone 15",
  image: "https://gsmphone.co/wp-content/uploads/2023/10/apple_iphone_15_05_ad_l.jpeg",
  price: 699,
};

export const productAtom = atom(iphone);

export const descriptionAtom = selectAtom(productAtom, ({ name, image }) => ({ name, image }), deepEquals);
export const priceAtom = selectAtom(productAtom, ({ price }) => price, deepEquals);

