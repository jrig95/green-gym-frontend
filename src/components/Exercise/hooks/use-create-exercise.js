import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createExercise = async (exercise) => {
  await axios.post(
    `${baseUrl}/programs/${exercise.program_id}/daily_workouts/${exercise.daily_workout_id}/exercises`,
    exercise
  );
};

export const useCreateExercise = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((exercise) => createExercise(exercise), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    },
  });

  return mutate;
};
