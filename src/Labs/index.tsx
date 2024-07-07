import {Routes, Route, Navigate} from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import React from "react";

export default function Labs() {
    return (
        <div>
            <h1>Welcome to Web Dev</h1>
            <h1>Yijia Cao</h1>
            <h1>CS5610 Section 61065</h1>
            <h1>Labs</h1>
            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3" element={<Lab3/>}/>
            </Routes>
            < a href = "https://github.com/yijianeu/kanbas-react-web-app-2024-su2">
                GitHub
            </a>
        </div>
    );
}

