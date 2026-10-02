import styles from "./Components.module.css";

export default function Components() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Components Available in Early Access</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>🗂️</div>
          <h3 className={styles.title}>Card Component</h3>
          <p className={styles.text}>
            Perfect for landing pages, product listings and feature highlights.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🔳</div>
          <h3 className={styles.title}>Modal Component</h3>
          <p className={styles.text}>
            Accessible, animated and ready for forms, confirmations or dialogs.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>📐</div>
          <h3 className={styles.title}>Navigation Bar</h3>
          <p className={styles.text}>
            Responsive navigation with mobile menu and smooth animations.
          </p>
        </div>
      </div>
       <section className={`${styles.container} fadeIn`}/>
    </section>
  );
}
