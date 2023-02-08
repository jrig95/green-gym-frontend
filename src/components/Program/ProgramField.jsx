import styles from "./ProgramField.module.css";

export const ProgramField = ({
  field,
  fieldObj,
  fieldValue = "",
  onChange,
  isEditable = false,
}) => {
  return (
    <div className={styles.field}>
      <span className={styles.innerField}>
        <span>{fieldObj.icon}</span>
        {isEditable ? (
          <input
            name={field}
            type={fieldObj.type}
            placeholder={`# of ${fieldObj.text || field}`}
            onChange={onChange}
            defaultValue={fieldValue}
            value={fieldValue}
            min={0}
            max={20000}
          />
        ) : (
          <span>{`${fieldValue} of ${fieldObj.text || field}`}</span>
        )}
      </span>
    </div>
  );
};
