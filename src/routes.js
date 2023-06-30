import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Container/Mainpage/mainpage";
import Footer from "./Component/Footer/footer";
import Sidebar from "./Component/Sidebar/sidebar";
import Error from "./Container/Error/error";
import Feature from "./Container/Feature/feature";
import Landingpage from "./Container/Landing/landingpage";
import Skills from "./Container/Skills/skills";
import Eduction from "./Container/Education/eduction";
import NavigationBar from "./Component/Navbar/navbar";
import Experience from "./Container/Education/experience";
import Portfolio from "./Container/Portfolio/portfolio";
import Elements from "./Container/Elements/elements";
import ElementsTemplate from "./Container/Elements/elementsTemplate";
import Project from "./Container/Projects/project";
import ProjectTemplate from "./Container/Projects/projectTemplate";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Mainpage />} path="/" />
                <Route element={<Error />} path="*" />
                <Route element={<NavigationBar />} path="navigation" />
                {/* <Route element={<Footer />} path="/footer" /> */}
                {/* <Route element={<Sidebar />} path="/sidebar" /> */}
                {/* <Route element={<Skills />} path="/skills" /> */}
                {/* <Route element={<Feature />} path="/feature" /> */}
                {/* <Route element={<Landingpage />} path="/Landingpage" /> */}
                <Route element={<Eduction />} path="/education" />
                <Route element={<Experience />} path="/exp" />
                <Route element={<Portfolio />} path="/portfolio" />
                <Route element={<Elements />} path="/element" />
                <Route element={<Project />} path="/projects" />
                <Route element={<ProjectTemplate />} path="/projecttemplate" />
                <Route element={<ElementsTemplate />} path="/elementtemplate" />
            </Routes>
        </BrowserRouter>
    )
}
