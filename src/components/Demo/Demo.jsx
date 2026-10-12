import styles from "./Demo.module.css";

export default function Demo() {
  return (
    <section id="demo" className={`${styles.container} fadeIn`}>
      <p className={styles.eyebrow}>Illustrative example</p>
      <h2 className={styles.heading}>See how a tailored CV could look</h2>
      <p className={styles.description}>
        A fictional example for a Frontend Developer role. Only include skills
        and experience that are genuinely yours — this is not a real AI-generated result.
      </p>
      <div className={styles.example}>
        <article className={styles.exampleCard}>
          <span className={styles.label}>Before · General CV</span>
          <h3 className={styles.cardTitle}>Skills</h3>
          <ul className={styles.list}>
            <li>React</li>
            <li>JavaScript</li>
            <li>Teamwork</li>
          </ul>
        </article>
        <article className={`${styles.exampleCard} ${styles.highlighted}`}>
          <span className={styles.label}>After · Tailored for Frontend Developer</span>
          <h3 className={styles.cardTitle}>Relevant experience</h3>
          <ul className={styles.list}>
            <li>Built user interfaces with React and JavaScript</li>
            <li>Integrated REST APIs into frontend projects</li>
            <li>Collaborated with a team in an Agile workflow</li>
          </ul>
        </article>
      </div>
      <p className={styles.exampleNote}>
        TypeScript, REST APIs, or Agile experience should only appear if you actually have it.
      </p>
      <a className={styles.ctaButton} href="#early">Join the free pilot</a>
    </section>
  );
}