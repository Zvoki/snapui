import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>SnapUI</div>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
        <a href="#home" className={styles.link} onClick={() => setOpen(false)}>Home</a>
        <a href="#demo" className={styles.link} onClick={() => setOpen(false)}>Demo</a>
        <a href="#early" className={styles.link} onClick={() => setOpen(false)}>Early Access</a>
        <a href="#contact" className={styles.link} onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${open ? styles.bar1 : ""}`}></span>
        <span className={`${styles.bar} ${open ? styles.bar2 : ""}`}></span>
        <span className={`${styles.bar} ${open ? styles.bar3 : ""}`}></span>
         <span className={`${styles.bar} ${open ? styles.bar4 : ""}`}></span>
      </button>
    </header>
  );
}

