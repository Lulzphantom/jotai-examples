import React, { PropsWithChildren } from "react";
import RenderCount from "./render-count";

interface Props extends PropsWithChildren {
  title: string;
}

const ExampleContainer = ({ children, title }: Props) => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div
        className={
          "fixed left-0 top-0 flex w-full justify-center border-b !bg-opacity-40 text-black dark:text-white border-gray-300 pb-6 pt-8 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        }
      >
        <span className="[writing-mode:vertical-lr] absolute left-0 rotate-180 text-center text-xs">
          {title}
        </span>
        {children}
        <RenderCount />
      </div>
    </div>
  );
};

export default ExampleContainer;
