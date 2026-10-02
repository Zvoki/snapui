import styles from "./EarlyAccess.module.css";

export default function EarlyAccess() {
  return (
    <section id="early" className={`${styles.container} fadeIn`}>
      <h2 className={styles.title}>Early Access — 20 €</h2>

      <p className={styles.subtitle}>
        Limited to the first 20 users.
      </p>

      <ul className={styles.list}>
        <li>✔️ Early access to the SnapUI component library</li>
        <li>✔️ 3 demo components (Card, Modal, Navigation)</li>
        <li>✔️ All future updates included</li>
        <li>✔️ Direct feedback channel</li>
        <li>✔️ Influence the direction of the product</li>
      </ul>

      <button className={styles.ctaButton}>
        Get Early Access
      </button>
      
    </section>
  );
}
