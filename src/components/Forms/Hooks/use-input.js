import { useState } from "react";

const useInput = (validateValue, initalValue) => {
  console.log(initalValue, "useInput")
  const [enteredValue, setEnteredValue] = useState(initalValue || "");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched("");
  }

  return {
    value: enteredValue,
    setEnteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
