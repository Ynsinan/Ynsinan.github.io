import React from 'react'
import styles from '../styles/projects.module.scss'
import projectData from '../projects'
import Project from '../components/Project/Project'

export default function Projects() {

    return (
        <div className={styles.projects}>
            <div className={styles.projectsHeader}>
                <p className={styles.h1}> MY PROJECTS</p>
                <hr className={styles.hr} />
            </div>
            {projectData.map((elements, index) => {
                return (

                    <Project elements={elements} index={index}></Project>

                )
            })}
        </div>
    )
}
// export const getStaticProps = async () => {
//     return {
//         props: {
//             projectData,
//         }
//     }
// }
