import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Layout from "./components/Layout";

export default function App(){
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>{
    setTheme(theme == "light"? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={theme} >
      <button onClick={toggleTheme}>toggle theme</button>
      <Layout/>
    </ThemeContext.Provider>
  )
}