import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { Profile } from "../Pages/Profile";
import { Blocos } from "../Pages/Blocos";
import { Energia } from "../Pages/Energia";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blocos" element={<Blocos />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/energia" element={<Energia />}/>
            <Route path="/details/:id" element={<Details />}/>
        </Routes>
    )
}