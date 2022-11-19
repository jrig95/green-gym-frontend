import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useContext } from "react";

import AuthContext from "../../../context/AuthContext";
import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

const updateExerciseInProgram = async (exerciseData, bearerToken) => {
  const exercise = {
    exercise_title: exerciseData.exercise_title,
    exercise_work_time: exerciseData.exercise_work_time,
    exercise_rest_time: exerciseData.exercise_rest_time,
    calories_per_exericse: exerciseData.calories_per_exericse,
    exercise_question: exerciseData.exercise_question,
    library_item_id: exerciseData.library_item_id,
  };

  await axios.patch(
    `${baseUrl}/programs/${exerciseData.programId}/daily_workouts/${exerciseData.workoutId}/exercises/${exerciseData.id}`,
    {exercise: exercise}, {
      headers: {
        Authorization: bearerToken
      }
    }
  );
};

export const useUpdateExerciseInProgram = () => {
  const authCtx = useContext(AuthContext);
  const bearerToken = authCtx.token;

  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation((exerciseData) => updateExerciseInProgram(exerciseData, bearerToken), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.workout]);
    },
    onError: (error) => {
      const title = error instanceof Error ? error.message : "error connecting to server";
      addError(title, error.status);
    }
  });

  return { mutate, isSuccess}
};
