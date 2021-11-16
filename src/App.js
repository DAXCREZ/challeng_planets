import './App.css';
import React from "react";
import {Route, Routes,} from "react-router-dom";
import HomeTemplate from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
import MenuMain from "./components/atoms/MenuMain";

function App() {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContente:"center", alignItems:"center"}}>
            <MenuMain/>
            <div>
                <Routes>
                    <Route exact path="/" element={<HomeTemplate/>}/>
                    <Route  path="/destination" element={<Destination/>}/>
                    <Route  path="/crew" element={<Crew/>}/>
                    <Route  path="/technology" element={<Technology/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
