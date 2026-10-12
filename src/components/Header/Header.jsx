import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo} onClick={() => setOpen(false)}>
        CV Tailor
      </a>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
      >
        <a href="#how-it-works" className={styles.link} onClick={() => setOpen(false)}>How it works</a>
        <a href="#demo" className={styles.link} onClick={() => setOpen(false)}>Example</a>
        <a href="#faq" className={styles.link} onClick={() => setOpen(false)}>FAQ</a>
        <a href="#early" className={`${styles.link} ${styles.navCta}`} onClick={() => setOpen(false)}>Join the waitlist</a>
      </nav>

      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
      >
        <span className={`${styles.bar} ${open ? styles.bar1 : ""}`}></span>
        <span className={`${styles.bar} ${open ? styles.bar2 : ""}`}></span>
        <span className={`${styles.bar} ${open ? styles.bar3 : ""}`}></span>
      </button>
    </header>
  );
}
