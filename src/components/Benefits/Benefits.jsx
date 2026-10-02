import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    
    <section className={styles.container}>
      <h2 className={styles.heading}>Why Developers Love SnapUI</h2>

      <div className={styles.grid}>
        <div className={styles.item}>⚡ Faster prototyping</div>
        <div className={styles.item}>🎨 Consistent design</div>
        <div className={styles.item}>🐛 Fewer bugs</div>
        <div className={styles.item}>🧩 Less manual CSS</div>
        <div className={styles.item}>🚀 Great for startups</div>
        <div className={styles.item}>🔧 Clean, optimized code</div>
      </div>
    </section>
  );
}
