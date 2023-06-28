import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Container/Mainpage/mainpage";
import Footer from "./Component/Footer/footer";
import Sidebar from "./Component/Sidebar/sidebar";
import Error from "./Container/Error/error";
import About from "./Container/About/about";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Mainpage />} path="/" />
                <Route element={<Error />} path="*" />
                <Route element={<Footer />} path="/footer" />
                <Route element={<Sidebar />} path="/sidebar" />
                <Route element={<About />} path="/about" />
            </Routes>
        </BrowserRouter>
    )
}
