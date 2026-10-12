import { useState } from "react";
import styles from "./WaitlistForm.module.css";
import { addWaitlistSignup, isWaitlistConfigured } from "../../lib/waitlist";

const contactEmail = "zvonimir.juric@utb.ecutbildning.se";

export default function WaitlistForm({ variant = "default", idPrefix = "waitlist" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    if (!isWaitlistConfigured) {
      setStatus({
        type: "error",
        message: "Online signups aren’t set up yet. Email us to apply for the pilot.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      await addWaitlistSignup(email);
      form.reset();
      setStatus({
        type: "success",
        message: "You’re on the waitlist. Thanks for joining the pilot!",
      });
    } catch (error) {
      if (error.code === "23505") {
        setStatus({
          type: "success",
          message: "This email is already on the waitlist. Thanks for your interest!",
        });
      } else {
        console.error("Waitlist signup failed:", error);
        setStatus({
          type: "error",
          message: "We couldn’t save your signup. Please try again or email us directly.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`${styles.container} ${variant === "hero" ? styles.hero : ""}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={`${idPrefix}-email`}>
          Email address
        </label>
        <div className={styles.formRow}>
          <input
            className={styles.input}
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
          <button className={styles.ctaButton} type="submit" disabled={isSubmitting}>
            Apply for a free CV review
          </button>
        </div>
        <label className={styles.consent} htmlFor={`${idPrefix}-consent`}>
          <input
            id={`${idPrefix}-consent`}
            name="consent"
            type="checkbox"
            required
          />
          <span>
            I agree to have my email stored so I can be contacted about the AI CV Tailor pilot.
            I can request its deletion at any time.
          </span>
        </label>
      </form>
      {status ? (
        <p className={`${styles.status} ${styles[status.type]}`} role="status">
          {status.message}{" "}
          {status.type === "error" && !isWaitlistConfigured && (
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          )}
          {status.type === "error" && isWaitlistConfigured && (
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          )}
        </p>
      ) : !isWaitlistConfigured ? (
        <p className={styles.note}>
          Online signup is being set up. Until then, email{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to apply.
        </p>
      ) : null}
    </div>
  );
}
