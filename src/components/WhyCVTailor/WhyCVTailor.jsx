import styles from "./WhyCVTailor.module.css";

const benefits = [
  {
    icon: "01",
    title: "Save time",
    description: "Start with a focused draft instead of rewriting your CV from scratch.",
  },
  {
    icon: "02",
    title: "Match the role",
    description: "Bring relevant skills and experience from the job description into focus.",
  },
  {
    icon: "03",
    title: "Tell a stronger story",
    description: "Create a tailored cover letter that connects your experience to the role.",
  },
];

export default function WhyCVTailor() {
  return (
    <section className={`${styles.container} fadeIn`}>
      <p className={styles.eyebrow}>Why AI CV Tailor?</p>
      <h2 className={styles.heading}>Spend less time tailoring. Apply with more focus.</h2>

      <div className={styles.grid}>
        {benefits.map((benefit) => (
          <article className={styles.card} key={benefit.title}>
            <span className={styles.icon} aria-hidden="true">{benefit.icon}</span>
            <h3 className={styles.title}>{benefit.title}</h3>
            <p className={styles.text}>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
