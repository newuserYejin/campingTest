import { useQuery } from '@tanstack/react-query'
import apiAttraction from '../utils/apiAttraction'
import { useEffect } from 'react';

const fetchCurrentLocation = (userLat, userLot, radius) => {
    // 고정된 값으로 mapX와 mapY를 설정

    console.log("recv Lat:", userLat, "recv Lot:", userLot);

    const mapX = userLot;
    const mapY = userLat;

    // const mapX = 126.364195
    // const mapY = 37.4594355

    return apiAttraction.get(`/KorService1/locationBasedList1`, {
        params: {
            mapX,
            mapY,
            radius: radius,
            numOfRows: 100 // 출력 개수 조정,
        }
    })
}

export const useFetchLocation = (userLat, userLot, radius) => {
    return useQuery({
        queryKey: ['currentBy-attraction', userLat, userLot, radius],
        queryFn: () => fetchCurrentLocation(userLat, userLot, radius)
    })
}