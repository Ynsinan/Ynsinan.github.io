import React from 'react'
import styles from '../../styles/technologies.module.scss'
import { motion } from "framer-motion";
export default function Technologies() {
    return (
        <div className={styles.technologies}>
            <div className={styles.header}>
                <h1>I use the following technologies</h1>

            </div>
            <div className={styles.skills}>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/java.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/javascript.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/typescript.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/react.svg" alt="java" height="50px" />

                </div>

                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/nextjs.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/html.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/css.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/sass.svg" alt="java" height="50px" />

                </div>
                <div className={styles.skill}>
                    <motion.img
                        initial={{ scale: 1.5 }}
                        exit={{ scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 500,
                            damping: 400
                        }} src="/assets/skills/bootstrap.svg" alt="java" height="50px" />

                </div>
            </div>
        </div>
    )
}
