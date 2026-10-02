import styles from "./Demo.module.css";

export default function Demo() {
  return (
    
    <section id="demo" className={`${styles.container} fadeIn`}>
      <h2 className={styles.heading}>See SnapUI in Action</h2>
      <div className={styles.videoFrame}>
  <iframe
    src="https://www.youtube-nocookie.com/embed/8eIqFfYxi7A"
    title="SnapUI demo video"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>


      <p className={styles.description}>
        Here&apos;s a quick example of what SnapUI can generate from a simple
        prompt. Clean code, modern styling, and fully customizable.
      </p>
      <button className={styles.ctaButton} type="button">
        Try the Demo
      </button>

    </section>
    
  );
}