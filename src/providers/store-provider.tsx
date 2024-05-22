"use client";

import React, { PropsWithChildren } from "react";
import { Provider } from "jotai";

const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>;
};

export default StoreProvider;
