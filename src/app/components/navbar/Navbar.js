import React from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.Head}>
      <nav className={styles.navbar}>

<div className={styles.left}>LOGO</div>
<div className={styles.middle}>
    <ul className={styles.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blog</li>
        <li>careers</li>
        <li>Contact</li>
    </ul>
</div>

<div className={styles.ryt}>

    <button>Connect</button>
</div>
      </nav>
    </div>
  )
}

export default Navbar
