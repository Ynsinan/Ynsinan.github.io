import React, { useEffect, useState } from 'react'
import styles from '../../styles/projects.module.scss'
export default function Tag({ tag, index }) {
    const [bgColor, setBgColor] = useState("");
    // const [textColor, setTextColor] = useState("");
    useEffect(() => {
        if (tag === "typescript") {
            setBgColor("#2F74C0");
        }
        else if (tag === "react") {
            setBgColor("#5ED3F3");
        }
        else if (tag === "sass") {
            setBgColor("#CF649A");
        }
        else if (tag === "javascript") {
            setBgColor("#EFD81D");
        }
    }, [tag])
    return (
        <div className={styles.projectTag} key={index}>
            <span className={styles.tag} style={{ backgroundColor: bgColor }}>
                {tag}
            </span>

        </div>
    )
}
