import styles from "./EarlyAccess.module.css";
import WaitlistForm from "../WaitlistForm/WaitlistForm";

export default function EarlyAccess() {
  return (
    <section id="early" className={`${styles.container} fadeIn`}>
      <p className={styles.eyebrow}>Early access</p>
      <h2 className={styles.title}>Apply for a free CV review</h2>

      <p className={styles.subtitle}>
        We’re recruiting our first 10 pilot testers. Share a real job
        description and help us improve the idea.
      </p>

      <WaitlistForm idPrefix="footer-waitlist" />
    </section>
  );
}
