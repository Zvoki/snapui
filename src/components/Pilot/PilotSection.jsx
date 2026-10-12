
import styles from "./PilotSection.module.css";

export default function PilotSection() {
    return (
        <section className={`${styles.container} fadeIn`} id="pilot">
            <div className={styles.content}>
                <p className={styles.eyebrow}>Getting started</p>
                <h2 className={styles.heading}>We’re starting with a small group of testers</h2>
                <p className={styles.subheading}>
                    AI CV Tailor is in the early stages of development. Our first
                    users will try tailored applications with our help and share
                    honest feedback before we build an automated product.
                </p>
                <div className={styles.note}>
                    <span className={styles.noteIcon} aria-hidden="true">i</span>
                    <p>
                        During the pilot, applications may be prepared manually
                        with the help of AI tools. We can’t promise an interview
                        or a job — our goal is to help present your relevant
                        experience more clearly.
                    </p>
                </div>
            </div>
        </section>
    );
}
