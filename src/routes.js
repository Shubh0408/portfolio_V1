import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Container/Mainpage/mainpage";
import Footer from "./Component/Footer/footer";
import Sidebar from "./Component/Sidebar/sidebar";
import Error from "./Container/Error/error";
import About from "./Container/About/about";
import Feature from "./Container/Feature/feature";
import Profile from "./Container/Profile/profile";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Mainpage />} path="/" />
                <Route element={<Error />} path="*" />
                <Route element={<Footer />} path="/footer" />
                <Route element={<Sidebar />} path="/sidebar" />
                <Route element={<About />} path="/about" />
                <Route element={<Feature />} path="/feature" />
                <Route element={<Profile />} path="/profile" />
            </Routes>
        </BrowserRouter>
    )
}
