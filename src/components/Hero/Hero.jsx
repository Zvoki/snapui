import styles from "./Hero.module.css";
import WaitlistForm from "../WaitlistForm/WaitlistForm";

export default function Hero() {
  return (
    
    <section id="home" className={styles.heroContainer}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>A smarter way to apply</p>
        <h1 className={styles.title}>
          Stop rewriting your CV for every application.
        </h1>

        <p className={styles.subtitle}>
          We’re building an AI tool to turn a job ad and your experience into
          a tailored CV and cover letter in minutes.
        </p>

        <WaitlistForm variant="hero" idPrefix="hero-waitlist" />
        <p className={styles.smallText}>
          Recruiting our first 10 pilot testers — join early and help shape what comes next.
        </p>
      </div>
    </section>
  );
}
