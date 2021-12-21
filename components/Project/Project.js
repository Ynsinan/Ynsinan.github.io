import React from "react";
import styles from "../../styles/projects.module.scss";
import Tag from "../Project/Tag";
import Link from "next/link";
export default function Project({ elements, index }) {
  return (
    <div className={styles.project} key={index}>
      <div className={styles.projectHeader}>
        <Link href={`/projects/${elements.id}`}>
          <a>
            {" "}
            <h1>{elements.name}</h1>
          </a>
        </Link>
      </div>
      <div className={styles.projectTags}>
        {elements.tags.map((tag, index) => {
          return <Tag tag={tag} key={index}></Tag>;
        })}
      </div>
    </div>
  );
}
