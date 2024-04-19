import { useQuery } from "@tanstack/react-query";
import apiGocamping from "../utils/apiGocamping";

const API_KEY = process.env.REACT_APP_KEY_ENCODING_SA;
const PARAMS = process.env.REACT_APP_PARAMS_DEFAULT;

const fetchTagSearch = ({page}) => {
    
     return apiGocamping.get(
            `basedList?serviceKey=${API_KEY}&${PARAMS}&pageNo=${page}&numOfRows=50/`
          )
}

export const useTagSearchQuery = ({page}) => {
    return useQuery({
        queryKey: ['tag-search',{page}],
        queryFn:()=> fetchTagSearch({page}),
        select:(result)=>result.data.response.body
    });
};