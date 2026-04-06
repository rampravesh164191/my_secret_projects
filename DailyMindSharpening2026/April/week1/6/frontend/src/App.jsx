import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Layout from "./components/Layout";

export default function App(){
  const [theme, setTheme] = useState("light");

  function toggleTheme(){
    setTheme(theme == "light"? "dark" : "light");
  }

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Layout/>
      </ThemeContext.Provider>
    </div>
  )
}