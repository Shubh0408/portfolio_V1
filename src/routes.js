import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Container/Mainpage/mainpage";
import Footer from "./Component/Footer/footer";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Mainpage />} path="/" />
                <Route element={<Footer />} path="/footer" />
            </Routes>
        </BrowserRouter>
    )
}
