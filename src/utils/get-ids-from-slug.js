export const getIdsFromSlug = (string) => {
  const workoutId = string.split("-").slice(-2)[0];
  const workoutTrackerId = string.split("-").slice(-1)[0];

  return { workoutId, workoutTrackerId };
};
