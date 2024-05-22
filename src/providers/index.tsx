import { PropsWithChildren } from "react";
import StoreProvider from "./store-provider";
import ToastProvider from "./toast-provider";
import ThemeProvider from "./theme-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default Providers;
