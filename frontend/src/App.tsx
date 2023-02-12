import React from "react";
import "./App.css";
import {NavBar} from "./components/NavBar";
import {HomePage} from "./pages/HomePage";

function App() {

    return (
        <div className="bg-zinc-800 h-screen w-full text-white">
            <NavBar/>
            <HomePage/>
        </div>
    );
}

export default App;
