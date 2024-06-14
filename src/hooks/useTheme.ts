import { useState } from "react";
import { dark, light } from "../styles/theme";

export default function useHandleTheme() {
  const [theme, setTheme] = useState(light);

  function handleTheme() {
    setTheme(theme === light ? dark : light);
  }

  return {
    theme,
    handleTheme,
  };
}
