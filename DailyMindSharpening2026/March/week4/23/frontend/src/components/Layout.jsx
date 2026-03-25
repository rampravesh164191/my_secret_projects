import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Layout(){
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1>Current theme : {theme}</h1>
        </div>
    )
}