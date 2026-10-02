
import { useState } from "react";
import styles from "./SnapUI.module.css";

export default function SnapUI() {
    const [prompt, setPrompt] = useState(
        "Create a card component with an image, title, description and a button."
    );
    const [loading, setLoading] = useState(false);
    const [jsxCode, setJsxCode] = useState("");
    const [cssCode, setCssCode] = useState("");
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        setLoading(true);
        setTimeout(() => {
            // // This is a demo generator - later we replace it with a real AI call
            const jsx = `
import styles from "./GeneratedCard.module.css";

export default function GeneratedCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://placehold.co/400x220"
        alt="Product"
        className={styles.image}
      />
      <h3 className={styles.title}>Modern React Component</h3>
      <p className={styles.description}>
        This card was generated from a simple description using SnapUI.
      </p>
      <button className={styles.button}>Learn More</button>
    </div>
  );
}
`.trim();

            const css = `
.card {
  max-width: 420px;
  background-color: var(--color-white);
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.title {
  font-family: var(--font-heading);
  font-size: var(--font-xl);
  margin: var(--space-md) var(--space-md) var(--space-xs);
}

.description {
  font-size: var(--font-md);
  color: var(--text-gray);
  margin: 0 var(--space-md) var(--space-md);
}

.button {
  margin: 0 var(--space-md) var(--space-md);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 999px;
  border: none;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-md);
  font-weight: var(--weight-medium);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.button:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}
`.trim();

            setJsxCode(jsx);
            setCssCode(css);
            setGenerated(true);
            setLoading(false);
        }, 1200); // simulacija AI poziva
    };

    return (
      
        <section className={`${styles.container} fadeIn`} id="snapui">
            <div className={styles.left}>
                <h2 className={styles.heading}>Generate a React component from a prompt</h2>
                <p className={styles.subheading}>
                    Describe the component you need. SnapUI turns it into clean, production‑ready code.
                </p>

                <textarea
                    className={styles.textarea}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    className={styles.button}
                    onClick={handleGenerate}
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Component"}
                </button>
            </div>

            <div className={styles.right}>
                <div className={`${styles.preview} ${loading ? styles.blur : ""}`}>
                    <h3 className={styles.previewTitle}>Live Preview</h3>
                    {loading ? (
                        <div className={styles.loadingBox}>
                            <div className={styles.spinner}></div>
                            <p className={styles.loadingText}>Generating component…</p>
                        </div>
                    ) : generated ? (
                        <div className={styles.cardPreview}>
                            <img
                                src="https://placehold.co/400x220"
                                alt="Product"
                                className={styles.previewImage}
                            />
                            <h3 className={styles.previewHeading}>Modern React Component</h3>
                            <p className={styles.previewText}>
                                This card was generated from a simple description using SnapUI.
                            </p>
                            <button className={styles.previewButton}>Learn More</button>
                        </div>
                    ) : (
                        <p className={styles.placeholder}>
                            Generate a component to see the preview here.
                        </p>
                    )}
                </div>

                <div className={styles.codePanel}>
                    <h3 className={styles.codeTitle}>Generated JSX</h3>
                    <pre className={styles.codeBlock}>
                        {generated ? jsxCode : "// JSX code will appear here after generation"}
                    </pre>
                </div>

                <div className={styles.codePanel}>
                    <h3 className={styles.codeTitle}>Generated CSS Module</h3>
                    <pre className={styles.codeBlock}>
                        {generated ? cssCode : "/* CSS Module code will appear here after generation */"}
                    </pre>
                </div>
            </div>
        </section>
       
    );
    
}


