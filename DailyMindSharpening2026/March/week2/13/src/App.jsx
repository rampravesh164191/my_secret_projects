import React, { useState } from "react";
import Layout from "./components/Layout";
import { ThemeContext } from "./components/ThemeContext";

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Layout />

    </ThemeContext.Provider>
  );
}

export default App;