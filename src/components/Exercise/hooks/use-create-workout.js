import axios from "axios";
import { useMutation } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createWorkout = async (workout) => {
  await axios.post(`${baseUrl}/programs/${workout.program_id}/daily_workouts`);
};

export const useCreateWorkout = () => {
  const { addError } = useAPIError();
  const { mutate } = useMutation((workout) => createWorkout(workout), {
    onError: (error) => {
      const title =
        error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.satus);
    },
  });

  return mutate;
};
