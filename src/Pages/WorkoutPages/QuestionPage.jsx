import styles from "./QuestionPage.module.css";
import { useState } from "react";

const QuestionCompletedPage = ({ text }) => {
  return (
    <div className={styles.question}>
      <h3>{text}</h3>
    </div>
  );
};
export const QuestionPage = () => {
  const [completed, setCompleted] = useState(false);
  const [completionText, setCompletionText] = useState("");
  const options = [
    { value: "1", label: "Not so well", emoji: "😔" },
    { value: "2", label: "Average", emoji: "😐" },
    { value: "3", label: "Good", emoji: "😊" },
    { value: "4", label: "Awesome!", emoji: "😁" },
  ];
  return (
    <main className={styles.wrapperCard}>
      {!completed ? (
        <>
          <div className={styles.question}>How do you feel today?</div>
          <div className={styles.answers}>
            {options.map(({ value, label, emoji }) => {
              return (
                <div className={styles.answer} key={value}>
                  <button
                    id={value}
                    onClick={(e) => {
                      const answer = e.currentTarget.id;
                      answer > 2
                        ? setCompletionText("We are glad. See you tomorrow!")
                        : setCompletionText(
                            "Let's try to make it better tomorrow!"
                          );
                      setCompleted(true);
                    }}
                  >{`${label} ${emoji}`}</button>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <QuestionCompletedPage text={completionText} />
      )}
    </main>
  );
};
