import React from "react";
import Navigation from "./navigation"


export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />

            <div className="children">{children}</div>
        </div>

    )
}
