import { useQuery } from '@tanstack/react-query'
import apiAttraction from '../utils/apiAttraction'

const fetchAreaCode = () => {
    return apiAttraction.get(`/KorService1/areaCode1`, {
        params: {
            numOfRows: 17 // 출력 개수 조정,
        }
    })
}

export const useAreaCode = () => {
    return useQuery({
        queryKey: ['AreaCode-list'],
        queryFn: fetchAreaCode,
        select: (result) => result.data.response.body.items
    })
}