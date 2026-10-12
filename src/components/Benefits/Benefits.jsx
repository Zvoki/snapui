import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={`${styles.container} fadeIn`}>
      <p className={styles.eyebrow}>Who it’s for</p>
      <h2 className={styles.heading}>A better starting point for your next application</h2>

      <div className={styles.grid}>
        <div className={styles.item}>Students preparing for their first roles</div>
        <div className={styles.item}>Junior developers building their careers</div>
        <div className={styles.item}>Interns and work-placement applicants</div>
        <div className={styles.item}>Job seekers sending multiple applications</div>
      </div>
    </section>
  );
}
