import { useState } from "react"
import About from "./About"
import {Link} from "react-router-dom"
import Projects from "./Projects"
import Contact from "./Contact"

export default function Navbar(){
    const [page, setPage] = useState(<About/>)
    return (
        <div className="border h-[60px] flex items-center px-4 justify-between">
            <div>RP</div>
            <div className="hidden gap-4 sm:flex">
                <Link to="/about" className="hover:text-green-500 hover:cursor-pointer px-3 rounded-lg">About</Link>
                <Link to="/projects" className="hover:text-green-500 hover:cursor-pointer px-3 rounded-lg">Projects</Link>
                <Link to="/contact" className="hover:text-green-500 hover:cursor-pointer px-3 rounded-lg">Contact</Link>
            </div>
            <div className="flex gap-4">
                <button className="border px-3 py-1 rounded-lg hover:cursor-pointer">Signup</button>
                <button className="border px-3 py-1 rounded-lg hover:cursor-pointer bg-black text-yellow-500">Login</button>
            </div>
        </div>
    )
}