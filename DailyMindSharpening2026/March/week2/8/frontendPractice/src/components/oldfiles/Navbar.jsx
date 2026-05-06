import {Menu, X} from "lucide-react"
import { useState } from "react"
export default function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="border w-full h-[60px] flex justify-between items-center bg-white px-4 relative">
            <div>Navbar</div>
            <div className="gap-3 hidden sm:flex">
                <h3 className="hover:text-blue-500 cursor-pointer">Home</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">About</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">Projects</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">Contact</h3>
            </div>
            <div className="gap-3 hidden sm:flex">
                <button className="border px-5 py-1 rounded-sm bg-blue-500 text-white hover:bg-blue-700 cursor-pointer" >Login</button>
                <button className="border px-5 py-1 rounded-sm hover:cursor-pointer">SignUp</button>
            </div>
            {toggleMenu == true? 
            <X className="sm:hidden cursor-pointer" onClick={()=>setToggleMenu(false)} /> : 
            <Menu className="sm:hidden cursor-pointer" onClick={()=>setToggleMenu(true)} />}
            {toggleMenu && (
                <div className="absolute right-0 w-[200px] top-[60px] bg-white flex flex-col items-center gap-4 py-4 sm:hidden rounded-bl-lg">
                <h3 className="hover:text-blue-500 cursor-pointer">Home</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">About</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">Projects</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">Contact</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">Login</h3>
                <h3 className="hover:text-blue-500 cursor-pointer">Signup</h3>
            </div>
            )}
        </div>
    )
}