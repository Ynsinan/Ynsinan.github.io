import React from "react";
import Navigation from "./navigation"
import Footer from "./footer"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />
            <div className="children">{children}</div>
            <Footer>
            </Footer>
        </div>

    )
}
