export const getIdFromSlug = (params) => {
  const programId = params.programId.split("-").slice(-1)[0];

  return programId;
}