export const selectIsValid = (value) => {
  return value !== "select..." && value !== "";
};

export const isANumber = (value) => {
  const number = parseInt(value);
  return !isNaN(number);
};

export const textNotEmpty = (value) => value !== "";
