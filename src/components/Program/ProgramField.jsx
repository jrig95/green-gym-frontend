import styles from "./ProgramField.module.css";

export const ProgramField = ({ field, icon, type }) => {
  return (
    <div className={styles.field}>
      <span className={styles.innerField}>
        <span>{icon}</span>
        <input type={type} placeholder={`# of ${field}`} />
      </span>
    </div>
  );
};
