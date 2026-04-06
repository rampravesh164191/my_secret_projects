import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Sidebar(){
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1>Bobby Theme : {theme}</h1>
        </div>
    )
}