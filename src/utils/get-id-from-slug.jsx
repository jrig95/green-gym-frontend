export const getIdFromSlug = (string) => {
  const id = string.split("-").slice(-1)[0];

  return id;
}