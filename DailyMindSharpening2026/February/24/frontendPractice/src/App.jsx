import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(){
  return (
    <BrowserRouter>
      <div className="border h-screen w-screen bg-yellow-500 sm:bg-green-500 lg:bg-purple-500 lg:max-w-[1536px] m-auto">
        <Navbar/>

        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;