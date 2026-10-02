import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.container}>
      <section className={`${styles.container} fadeIn`}>
        <p className={styles.text}>SnapUI © 2026</p>
        <p className={styles.text}>Made by Zvonimir Jurić</p>
        <p className={styles.text}>
          Contact: <a className={styles.emailLink} href="mailto:zvonimir.juric@utb.ecutbildning.se">zvonimir.juric@utb.ecutbildning.se</a>
        </p>
        <p className={styles.text}>Phone: +46 765 80 63 43</p>
        <p className={styles.text}>Blekinge, Sweden</p>
      </section>
    </footer>
  );
}
