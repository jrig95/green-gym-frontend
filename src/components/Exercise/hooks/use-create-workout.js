import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createWorkout = async (daily_workout) => {
  await axios.post(`${baseUrl}/programs/${daily_workout.program_id}/daily_workouts`, daily_workout);
};

export const useCreateWorkout = () => {
  const { addError } = useAPIError();
  const { mutate, isSuccess } = useMutation((daily_workout) => createWorkout(daily_workout), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.satus);
    },
  });

  return { mutate, isSuccess };
};
