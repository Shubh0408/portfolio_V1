import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Container/Mainpage/Mainpage";

export default function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Mainpage />} path="/" />
        </Routes>
        </BrowserRouter>
    )
}