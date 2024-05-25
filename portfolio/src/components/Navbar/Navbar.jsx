import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
      <a href="/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
