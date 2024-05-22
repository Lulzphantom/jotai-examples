"use client";

import React, { PropsWithChildren } from "react";
import { Toaster } from "sonner";

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster position="bottom-right" />
    </>
  );
};

export default ToastProvider;
