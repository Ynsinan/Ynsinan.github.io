import Link from "next/link"
import styles from "../styles/navbar.module.scss"
export default function Navigation() {

  return (
    <div className={styles.navbar}>
      <div className={styles.leftNavbar}>
        <Link href="/">
          <a>
            <span>{"<"}</span>
            <span>{"Yunus INAN"}</span>
            <span>{"/>"}</span>
          </a>
        </Link>
      </div>
      <div className="right-navbar">
        <ul className="navbar-links">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
