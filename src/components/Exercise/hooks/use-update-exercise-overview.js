import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import useAPIError from "../../../common/hooks/use-API-error";
import { queryKeys } from "../../../react-query/constants";
import { baseUrl } from "../../../axiosInstance/constants";

// /api/v1/programs/:program_id/daily_workouts/:daily_workout_id/exercise_overviews/:id

const updateExerciseOverview = async (exerciseOverviewData) => {
  const exercise_overview = {
    overview_exercise_title: exerciseOverviewData.overview_exercise_title,
    number_of_sets: exerciseOverviewData.number_of_sets,
  };

  await axios.patch(
    `${baseUrl}/programs/${exerciseOverviewData.program_id}/daily_workouts/${exerciseOverviewData.daily_workout_id}/exercise_overviews/${exerciseOverviewData.id}`,
    exercise_overview
  );
};

export const useUpdateExerciseOverview = () => {
  const { addError } = useAPIError();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation(
    (exerciseOverviewData) => updateExerciseOverview(exerciseOverviewData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.workout]);
      },
      onError: (error) => {
        const title =
          error instanceof Error ? error.message : "error connecting to server";
        addError(title, error.status);
      },
    }
  );

  return { mutate, isSuccess };
};
