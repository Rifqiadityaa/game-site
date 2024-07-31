import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { REACT_QUERY_CACHE_KEYS } from "../../shared/constants/cacheKeys";
import { RAWG_API_BASE_URL } from "../../shared/constants/urls";

const fetchGenres = (additionalParams) => {
  return axios.get(`${RAWG_API_BASE_URL}/genres`, {
    params: {
      key: import.meta.env.VITE_RAWG_API_KEY,
      ...additionalParams,
    },
  });
};

const useGetGenres = (additionalParams, options) => {
  return useQuery({
    queryKey: [REACT_QUERY_CACHE_KEYS.getGenres, additionalParams],
    queryFn: () => fetchGenres(additionalParams),
    retry: (failureCount, error) => {
      return (
        error.response?.status !== 401 &&
        error.response?.status !== 403 &&
        failureCount < 3
      );
    },
    ...options,
  });
};

export default useGetGenres;
