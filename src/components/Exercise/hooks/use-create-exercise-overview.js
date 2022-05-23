import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createExerciseOverview = async (exerciseOverview) => {
  await axios.post(
    `${baseUrl}/programs/${exerciseOverview.programId}/daily_workouts/${exerciseOverview.daily_workout_id}/exercise_overviews`,
    exerciseOverview
  );
};

export const useCreateExerciseOverview = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation(
    (exerciseOverview) => createExerciseOverview(exerciseOverview),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return mutate;
};
