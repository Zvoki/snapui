import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.container}>
      <section className={styles.content}>
        <p className={styles.brand}>CV Tailor</p>
        <p className={styles.text}>Tailor your application. Show your experience.</p>
        <p className={styles.text}>
          Contact: <a className={styles.emailLink} href="mailto:zvonimir.juric@utb.ecutbildning.se">zvonimir.juric@utb.ecutbildning.se</a>
        </p>
        <p className={styles.copyright}>© 2026 AI CV Tailor</p>
      </section>
    </footer>
  );
}
