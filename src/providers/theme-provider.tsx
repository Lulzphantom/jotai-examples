"use client";

import { themeAtom } from "@/store/theme";
import { useAtomValue } from "jotai";
import React, { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = useAtomValue(themeAtom);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
