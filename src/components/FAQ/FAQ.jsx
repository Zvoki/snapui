import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>FAQ — Frequently Asked Questions</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.question}>Does SnapUI work with Next.js?</h3>
          <p className={styles.answer}>
            Yes — all components are fully compatible with Next.js, Vite and
            standard React setups.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.question}>Can I customize the generated components?</h3>
          <p className={styles.answer}>
            Absolutely. The code is clean, modular and easy to modify.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.question}>Is the AI expensive to use?</h3>
          <p className={styles.answer}>
            No. Generating a component costs less than €0.01.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.question}>Will there be more components?</h3>
          <p className={styles.answer}>
            Yes — early adopters help decide which components come next.
          </p>
        </div>
      </div>
       <section className={`${styles.container} fadeIn`}/>
    </section>
  );
}
