import styles from "./ProgramField.module.css";

export const ProgramField = ({
  field,
  fieldObj,
  fieldValue = "",
  onChange,
  isEditable = false,
}) => {
  return (
    <section className={styles.field}>
      <div className={styles.innerField}>
        <span>{fieldObj.icon}</span>
        {isEditable ? (
          <input
            name={field}
            type={fieldObj.type}
            placeholder={`# of ${fieldObj.text || field}`}
            onChange={onChange}
            defaultValue={fieldValue || 0}
            value={fieldValue || 0}
            min={0}
            max={20000}
          />
        ) : (
          <span>{`${fieldValue} of ${fieldObj.text || field}`}</span>
        )}
      </div>
    </section>
  );
};
