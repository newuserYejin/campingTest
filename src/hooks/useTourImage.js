import { useQuery } from "@tanstack/react-query";
import apiTour from "../utils/apiTour";

const API_KEY = process.env.REACT_APP_KEY_ENCODING_SA;
const PARAMS = process.env.REACT_APP_PARAMS_DEFAULT;

const fetchTourImage = (contentId) => {
  return apiTour.get(
    `/detailImage1?serviceKey=${API_KEY}&contentId=${contentId}&${PARAMS}`
  );
};

export const useTourImageQuery = (contentId) => {
  return useQuery({
    queryKey: ["tour-image", contentId],
    queryFn: () => fetchTourImage(contentId),
    select: (result) => result.data.response.body,
  });
};
