import React from 'react';
import Labs from './Labs';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Kanbas from "./Kanbas";

function App() {
  return (
      <HashRouter>
    <div>
        <Routes>
            <Route path="/" element={<Navigate to="Labs"/>} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        {/* Kanbas */}
        < a href = "https://github.com/yijianeu/kanbas-react-web-app-2024-su2">
            GitHub
        </a>
    </div>
        </HashRouter>
  );
}

export default App;
