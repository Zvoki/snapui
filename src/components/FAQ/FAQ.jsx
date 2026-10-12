import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section id="faq" className={`${styles.container} fadeIn`}>
      <h2 className={styles.heading}>Frequently asked questions</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.question}>Is the tool fully automated yet?</h3>
          <p className={styles.answer}>
            Not yet. The idea is at an early stage, and the pilot will help us
            learn what job seekers really need. Early applications may be
            tailored manually with the help of AI tools.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.question}>How much does the pilot cost?</h3>
          <p className={styles.answer}>
            The pilot is free. We’ll validate future pricing with users; we’re
            currently considering €5–€15 per month.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.question}>Can you guarantee I’ll get a job?</h3>
          <p className={styles.answer}>
            No. The tool can help present your experience more clearly, but it
            can’t guarantee an interview or a job.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.question}>How do I join?</h3>
          <p className={styles.answer}>
            Enter your email and your email app will open with a pre-written
            message. Send it to complete your application.
          </p>
        </div>
      </div>
    </section>
  );
}
