import styles from "./Hero.module.css";

export default function Hero() {
  return (
    
    <section id="home" className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Build React components in seconds.
        </h1>

        <p className={styles.subtitle}>
          SnapUI turns simple descriptions into clean, production-ready React
          components — instantly.
        </p>

        <a href="#snapui" className={styles.ctaButton}>
          Generate a Component
        </a>

        <p className={styles.smallText}>
          No setup. No boilerplate. Just describe what you need.
        </p>
      </div>
    </section>
  );
}
