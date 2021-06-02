import React from "react";
import Navigation from "./navigation"
import styles from '../styles/layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Navigation />
            <div className={styles.children}>{children}</div>
        </div>

    )
}
