
import styles from "../styles/navbar.module.scss"
import { Link, } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (


    <navbar>
      <div className={styles.navbar}>
        <div className={styles.leftNavbar}>
          <Link to="about" smooth={true} duration={2000}>
            <span className={styles.leftFragment}>{"<"}</span>
            <span className={styles.logo}>{"Yunus INAN"}</span>
            <span className={styles.rightFragment}>{"/>"}</span>
          </Link>
        </div>
        <div className={styles.rightNavbar}>
          <ul className={styles.navbarLinks} style={{ transform: open ? "translateX(0px)" : "" }}>
            <li>
              <Link to="about" smooth={true} duration={1000} onClick={() => setOpen(false)} >
                About
              </Link>


            </li>
            <li>
              <Link to="projects" smooth={true} duration={1000} onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000} onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className={styles.hamburger}
            size={20}
          />
        </div>
      </div>
    </navbar>


  );
}
