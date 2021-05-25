import React from 'react'
import styles from '../styles/projects.module.scss'
import projects from '../projects'
export default function Projects({ projects }) {
    console.log(projects);
    return (
        <div className={styles.projects}>
            <h1>Projects</h1>

        </div>
    )
}
export const getStaticProps = async () => {
    return {
        props: {
            projects,
        }
    }

}
