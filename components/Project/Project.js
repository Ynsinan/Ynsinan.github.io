import React from 'react'
import styles from '../../styles/projects.module.scss'
import Tag from '../Project/Tag';
import Link from 'next/link'
export default function Project({ elements, index }) {
    console.log(elements.id);
    return (
        <div className={styles.project} key={index}>

            <div className={styles.projectHeader}>
                <Link href="/">
                    <a> <h1>{elements.name}</h1></a>
                </Link>

            </div>
            <div className={styles.projectTags}>
                {elements.tags.map((tag, index) => {
                    return (
                        <Tag tag={tag} index={index}></Tag>

                    )
                })}
            </div>
        </div>
    )
}
