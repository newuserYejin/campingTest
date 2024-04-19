import { useQuery } from '@tanstack/react-query'
import apiEvent from '../utils/apiEvent'

const fetchEvent = ({ CurrentPage }) => {
    const params = {
        arrange: "C",
        numOfRows: 20 // 출력 개수 조정,
    }

    console.log("CurrentPage:", CurrentPage)

    if (typeof CurrentPage !== 'undefined' && CurrentPage !== 0) {
        params.pageNo = CurrentPage;
        console.log(CurrentPage);
    }

    return apiEvent.get(`/KorService1/searchFestival1`, { params })
}

export const useFetchEvent = ({ CurrentPage }) => {
    return useQuery({
        queryKey: ['Event_List', { CurrentPage }],
        queryFn: () => fetchEvent({ CurrentPage }),
        select: (result) => result.data.response
    })
}