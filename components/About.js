import React from 'react'
import styles from '../styles/about.module.scss';
import Typical from 'react-typical';
import Technologies from './About/Technologies';
import Link from 'next/link';
export default function About() {


    return (
        <div className={styles.about}>
            <div className={styles.aboutMe}>
                <h1>Hi I'm Yunus INAN</h1>
                <h3>I'm a{' '}
                    <strong className={styles.strong}>
                        <Typical

                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                'Computer Engineering Student',
                                1500,
                                'Frontend Developer 💻',
                                1500,
                                'Gamer 🎮',
                                1500,
                                'Student 👨🏽‍🎓',
                                1500,
                            ]}
                        />
                    </strong>
                </h3>
                <button className={styles.resumeButton}>
                    <Link style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1a3pVTV1e3kdZaD7j1OeVhK2AC8zmMv9z/view?usp=sharing">
                        <a>Resume</a>
                    </Link>
                </button>
                <hr className={styles.hr} />
                <Technologies></Technologies>
            </div>
            <div className={styles.rightSide}>
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    aria-hidden="true"

                >
                    <source src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.mp4" />
                </video>

            </div>

        </div>
    )
}

