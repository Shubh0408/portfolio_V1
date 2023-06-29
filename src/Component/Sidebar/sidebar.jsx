import React, { Component } from "react";
import "./sidebar.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FlagIcon from '@mui/icons-material/Flag';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FitbitIcon from '@mui/icons-material/Fitbit';

export default function Sidebar() {

    const expand_btn = document.querySelector("#expand-btn");

    let activeIndex;

    expand_btn.addEventListener("click", () => {
        document.body.classList.toggle("collapsed");
    });

    const current = window.location.href;

    const allLinks = document.querySelectorAll("#sidebar-links a")

    allLinks.forEach((elem) => {
        elem.addEventListener('click', function () {
            const hrefLinkClick = elem.href;

            allLinks.forEach((link) => {
                if (link.href == hrefLinkClick) {
                    link.classList.add("active");
                } else {
                    link.classList.remove('active');
                }
            });
        })
    });



    return (
        <html>
            <body id="body">
                <nav className="sideNavbar">
                    <div className="sidebar-top">
                        <span id="expand-btn">
                            <ChevronLeftIcon />
                        </span>
                        <FitbitIcon />
                        &emsp; <h3 className="hide">SHUBH</h3>
                    </div>
                    <div id="sidebar-links">
                        <ul>
                            <li>
                                <a href="/" className="active" title="Portfolio link">
                                    <div className="icon">
                                        <AccountBoxIcon />
                                    </div>
                                    <span className="link hide">Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#analytics" title="Analytics link">
                                    <div className="icon">
                                        <AnalyticsIcon />
                                    </div>
                                    <span className="link hide">Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a href="#dashboard" title="Performance link">
                                    <div className="icon">
                                        <DashboardIcon />
                                    </div>
                                    <span className="link hide">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a href="#reports" title="Reports Link">
                                    <div className="icon">
                                        <FlagIcon />
                                    </div>
                                    <span className="link hide">Reports</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </body>
        </html>
    )
}