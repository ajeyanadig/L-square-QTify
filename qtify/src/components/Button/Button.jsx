import styles from "./Button.module.css";

function Button({ text = "Give Feedback" }) {
  return <div className={styles.button}>{text}</div>;
}

export default Button;
