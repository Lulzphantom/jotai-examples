"use client";

import { themeAtom, toggleThemeAtom } from "@/store/theme";
import { useAtomValue, useSetAtom } from "jotai";
import ExampleContainer from "../example-container";
import useOnAtomChange from "@/hooks/use-notify-changes";

const ThemeSwitcher = () => {
  const toggleTheme = useSetAtom(toggleThemeAtom);
  const currentTheme = useAtomValue(themeAtom);

  useOnAtomChange(themeAtom);

  return (
    <ExampleContainer title="Theme Switcher With Notify">
      <div className="flex flex-col gap-2">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <span>
          Current theme: <strong>{currentTheme}</strong>
        </span>
      </div>
    </ExampleContainer>
  );
};

export default ThemeSwitcher;
