import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useSearchDataQuery } from '../../hooks/useSearchData'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './SearchDataPage.style.css'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import ListCard from '../CampingListPage/components/ListCard/ListCard';
import { Container } from 'react-bootstrap';
import { Pagination } from "@mui/material";
import TopBanner from '../Homepage/components/TopBanner';

const SearchDataPage = () => {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useSearchParams()
    const navigate = useNavigate()
    const keyword = query.get("q") || ""
    const province = query.get("province")
    const city = query.get("city")
    const theme = query.get("theme")



    const { data, isLoading, isError, error } = useSearchDataQuery({ keyword, page })
    console.log('data?', data)

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h3>Error: {error.message}</h3>;
    }


    const filteredData = data?.items.item?.filter(item => {
        return (!province || item.doNm === province) &&
            (!city || item.SigunguNm === city) &&
            (!theme || item.themaEnvrnCl.includes(theme));
    }) || []

    // let lengthOfFilteredData = filteredData?.length;

    const facilityData = data?.items.item?.map((item, index) => (
        item.sbrsCl.split(',')
    ))





    return (
        <>
            <TopBanner />
            <Container maxWidth="lg">

                <div>
                
                    <h2> {data?.totalCount}건의 검색 결과가 있습니다.</h2>
                    <div>현재 페이지 : {page}</div>
                    <button onClick={() => { setPage(page - 1) }}>이전</button>
                    <button onClick={() => { setPage(page + 1) }}>다음</button>
                    <Grid container spacing={2}>
                        {
                            filteredData.map((searchData, index) => (


                                <Grid key={index}>
                                    <ListCard data={searchData} facilityData={facilityData} index={index} />
                                </Grid>

                            ))
                        }
                    </Grid>

                </div>
            </Container>
            <Pagination
                count={12}
                defaultPage={1}
                siblingCount={0}
                size="large"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2em",
                }}
            />
        </>
    )
}

export default SearchDataPage