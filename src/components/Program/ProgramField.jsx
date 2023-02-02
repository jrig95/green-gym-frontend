import styles from "./ProgramField.module.css";

export const ProgramField = ({ field, icon, type, onChange }) => {
  return (
    <div className={styles.field}>
      <span className={styles.innerField}>
        <span>{icon}</span>
        <input type={type} placeholder={`# of ${field}`} onInput={onChange} />
      </span>
    </div>
  );
};
