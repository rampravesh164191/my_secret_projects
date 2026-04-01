
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function MinSidebar(){
    const theme = useContext(ThemeContext);
    return (
        <h1>MinSidebar Theme : {theme}</h1>
    )
}