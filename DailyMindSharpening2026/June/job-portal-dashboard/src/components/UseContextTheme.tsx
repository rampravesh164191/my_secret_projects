import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</button>;
}

export default function UseContextTheme() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}
