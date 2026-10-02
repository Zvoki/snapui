import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>How SnapUI Works</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>✏️</div>
          <h3 className={styles.title}>1. Describe</h3>
          <p className={styles.text}>
            Write a short description of the component you need. SnapUI
            understands structure, layout, styling and behavior.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>⚙️</div>
          <h3 className={styles.title}>2. Generate</h3>
          <p className={styles.text}>
            AI creates a clean React component with CSS Modules, ready to use.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🚀</div>
          <h3 className={styles.title}>3. Customize</h3>
          <p className={styles.text}>
            Edit, extend or restyle the component however you want — the code
            is yours.
          </p>
        </div>
      </div>
      <section className={`${styles.container} fadeIn`}/>

    </section>
  );
}
