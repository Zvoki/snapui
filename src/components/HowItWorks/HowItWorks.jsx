import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`${styles.container} fadeIn`}>
      <p className={styles.eyebrow}>Planned product flow</p>
      <h2 className={styles.heading}>From job ad to a tailored application</h2>
      <p className={styles.description}>
        The product is in development. During the pilot, we’ll guide you through
        this process manually — automated uploads and AI generation aren’t live yet.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">01</div>
          <h3 className={styles.title}>Paste the job ad</h3>
          <p className={styles.text}>
            Share the role you want to apply for.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">02</div>
          <h3 className={styles.title}>Upload your CV</h3>
          <p className={styles.text}>
            Provide your current CV as the source for your experience.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">03</div>
          <h3 className={styles.title}>Analyse the requirements</h3>
          <p className={styles.text}>
            Identify skills and experience the employer is looking for.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">04</div>
          <h3 className={styles.title}>Tailor your CV</h3>
          <p className={styles.text}>
            Bring your most relevant, truthful experience to the forefront.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">05</div>
          <h3 className={styles.title}>Write a cover letter</h3>
          <p className={styles.text}>
            Get a role-specific draft to review, edit, and make your own.
          </p>
        </div>
      </div>
    </section>
  );
}
