import axios from "axios";
import { useMutation } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { baseUrl } from "../../../axiosInstance/constants";

const createWorkout = async (daily_workout, bearerToken) => {
  await axios.post(
    `${baseUrl}/programs/${daily_workout.program_id}/daily_workouts`,
    { daily_workout: daily_workout },
    {
      headers: {
        Authorization: bearerToken,
      },
    }
  );
};

export const useCreateWorkout = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const { mutate, isSuccess, data } = useMutation(
    (daily_workout) => createWorkout(daily_workout, bearerToken),
    {
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.satus);
      },
    }
  );

  return { mutate, isSuccess, data };
};
