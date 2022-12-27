import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import { baseUrl } from "../../../axiosInstance/constants";
// create a useLeaderboard hook to generate a list of users
type LeaderboardUser = {
  id: Number;
  first_name: String;
  user_total_calories: Number;
  photo_url: String;
};
export const useLeaderboard = async (id) => {
  const { token } = useContext(AuthContext);
  const { data, isLoading, isError, isSuccess } = useQuery<LeaderboardUser[]>(
    ["leaderboard"],
    async () =>
      axios
        .get(`${baseUrl}/users/${id}/overall_impact`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
  );
  return { data, isLoading, isError, isSuccess };
};
