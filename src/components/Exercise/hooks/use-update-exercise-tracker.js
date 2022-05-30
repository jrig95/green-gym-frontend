import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const updateExercise = async (exercise) => {
  await axios.post(
    `${baseUrl}/program_trackers/${exercise.program_tracker_id}/daily_workout_trackers/${exercise.daily_workout_tracker_it}/exercise_trackers/${exercise.id}`,
    exercise
  );
};

export const useUpdateExercise = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((exercise) => updateExercise(exercise), {
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
