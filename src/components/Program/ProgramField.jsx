import styles from "./ProgramField.module.css";

export const ProgramField = ({
  field,
  fieldObj,
  fieldValue = "",
  onChange,
}) => {
  return (
    <div className={styles.field}>
      <span className={styles.innerField}>
        <span>{fieldObj.icon}</span>
        <input
          name={field}
          type={fieldObj.type}
          placeholder={`# of ${fieldObj.text || field}`}
          onChange={onChange}
          defaultValue={fieldValue}
          //   value={fieldValue}
        />
      </span>
    </div>
  );
};
