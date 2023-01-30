import styles from "./ProgramField.module.css";

export const ProgramField = ({field, icon}) => {
    return (
        <div className={styles.field}>
            <span>{icon}</span>
            <input type="text" placeholder={field} />
        </div>
    );

}