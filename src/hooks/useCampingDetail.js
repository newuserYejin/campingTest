import { useQuery } from "@tanstack/react-query";
import apiGocamping from "../utils/apiGocamping";

const API_KEY = process.env.REACT_APP_KEY_ENCODING_SA;
const PARAMS = process.env.REACT_APP_PARAMS_DEFAULT;

const fetchCampingDetail = () => {
  return apiGocamping.get(
    `basedList?serviceKey=${API_KEY}&${PARAMS}&pageNo=1&numOfRows=20/`
  );
};

export const useCampingDetailQuery = (pageNo) => {
  return useQuery({
    queryKey: ["camping_detail", pageNo],
    queryFn: () => fetchCampingDetail(pageNo),
    select: (result) => result.data.response.body.items,
  });
};

const fetchCampingKeyword = (keyword) => {
  return apiGocamping.get(
    `searchList?keyword=${encodeURI(keyword)}&serviceKey=${API_KEY}&${PARAMS}`
  );
};

export const useCampingKeywordQuery = (keyword) => {
  return useQuery({
    queryKey: ["camping", keyword],
    queryFn: () => fetchCampingKeyword(keyword),
    select: (result) => result.data.response?.body?.items?.item,
  });
};
