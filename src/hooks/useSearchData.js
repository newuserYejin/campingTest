import { useQuery } from "@tanstack/react-query";
import apiGocamping from "../utils/apiGocamping";

const API_KEY = process.env.REACT_APP_KEY_ENCODING_SA;
const PARAMS = process.env.REACT_APP_PARAMS_DEFAULT;

const fetchSearchData = ({keyword, page}) => {
    console.log('keyword? : ' , keyword)
     return keyword != "" ? 
        apiGocamping.get(
            `searchList?numOfRows=50&pageNo=${page}&serviceKey=${API_KEY}&${PARAMS}&keyword=${keyword}`) :
        apiGocamping.get(
            // `basedList?serviceKey=${API_KEY}&${PARAMS}&pageNo=${page}&numOfRows=50/`
            `basedList?numOfRows=100&pageNo=${page}&serviceKey=${API_KEY}&${PARAMS}`
          )
          
}

export const useSearchDataQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['search-data',{keyword, page}],
        queryFn:()=> fetchSearchData({keyword, page}),
        select:(result)=>result.data.response.body
    });
};