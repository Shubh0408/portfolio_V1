import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Container/Mainpage/mainpage";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Mainpage />} path="/" />
            </Routes>
        </BrowserRouter>
    )
}
