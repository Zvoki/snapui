import styles from "./Components.module.css";

export default function Components() {
  return (
    <section className={`${styles.container} fadeIn`}>
      <h2 className={styles.heading}>What’s included in a tailored application?</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">CV</div>
          <h3 className={styles.title}>A CV tailored to the role</h3>
          <p className={styles.text}>
            Clearly highlight the skills and experience relevant to the position.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">Aa</div>
          <h3 className={styles.title}>Relevant keywords</h3>
          <p className={styles.text}>
            Naturally include relevant terms without adding skills you don’t have.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">✉</div>
          <h3 className={styles.title}>A personalised cover letter</h3>
          <p className={styles.text}>
            A cover letter draft you can review, edit, and make your own.
          </p>
        </div>
      </div>
    </section>
  );
}
