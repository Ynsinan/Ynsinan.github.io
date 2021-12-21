import React from "react";
import styles from "../styles/contact.module.scss";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.header}>Stay Connected</h1>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/yunusinan/">
          <AiFillLinkedin className={styles.icon} size={40} />
        </a>
        <a href="https://github.com/Ynsinan">
          <AiFillGithub className={styles.icon} size={40} />
        </a>
        <a href="mailto:yns.inan1660@gmail.com">
          <AiOutlineMail className={styles.icon} size={40} />
        </a>
      </div>
    </div>
  );
}
