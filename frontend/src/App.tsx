import React from "react";
import "./App.css";
import {NavBar} from "./components/NavBar";
import {HomePage} from "./pages/HomePage";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {GameListPage} from "./pages/GameListPage";

function App() {

    return (
        <BrowserRouter>
            <div className="bg-zinc-800 h-screen w-full text-white">
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gamelist" element={<GameListPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
