import React, { useState } from "react";
import "./CampingDetailPage.style.css";
import { useCampingKeywordQuery } from "../../hooks/useCampingDetail";
import { useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import CampingDetailWeather from "./CampingDetailWeather/CampingDetailWeather";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/base/Button";
import AttractionCarousel from "../Homepage/components/CurrentLocation/AttractionCarousel";
import { useFetchLocation } from "../../hooks/useFetchLocation";
import CampingDetailMap from "./CampingDetailMap/CampingDetailMap";

const CampingDetailPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const { data = [], isLoading } = useCampingKeywordQuery(keyword);

  const campingDetail = data[0];
  // console.log("campingDetail", campingDetail);
  
  const {
    data: campingRecommendData,
    isLoading: campingRecommendIsLoading,
    isError: campingRecommendIsError,
    error: campingRecommendError,
  } = useFetchLocation(lat, lon, 5000);

  function createData(name, decription) {
    return { name, decription };
  }

  const rows = [
    createData(
      "화장실",
      campingDetail?.toiletCo ? campingDetail.toiletCo : "0"
    ),
    createData("샤워실", campingDetail?.swrmCo ? campingDetail.swrmCo : "0"),
    createData("개수대", campingDetail?.wtrplCo ? campingDetail.wtrplCo : "0"),
    createData(
      "트레일러 동반",
      campingDetail?.trlerAcmpnyAt == "Y" ? "동반가능" : "불가능"
    ),
    createData(
      "카라반 동반",
      campingDetail?.trlerAcmpnyAt == "Y" ? "동반가능" : "불가능"
    ),
    createData("부대시설", campingDetail?.sbrsCl ? campingDetail.sbrsCl : "0"),
    createData(
      "반려동물",
      campingDetail?.animalCmgCl == "불가능" ? "불가능" : "가능"
    ),
  ];

  if (isLoading) {
    return (
      <div className="loading_wrap">
        <CircularProgress />
      </div>
    );
  }

  if (campingRecommendIsLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (campingRecommendIsError) {
    return <div>{campingRecommendError.message}</div>;
  }

  console.log("campingRecommendData:", campingRecommendData);

  let CampingRecommendAttractData = [];
  let CampingRecommendItemList = [];
  CampingRecommendAttractData = campingRecommendData.data?.response;
  CampingRecommendItemList = CampingRecommendAttractData?.body.items?.item;

  console.log("camping Location lat:", lat, "Camping Location lot:", lon);
  console.log("CampingRecommendAttractData:", CampingRecommendAttractData);
  console.log("CampingRecommendItemList:", CampingRecommendItemList);

  return (
    <div className="camping-detail-main">
      {campingDetail ? (
        <div>
          <Container className="camping-detail-main-area">
            <Grid container spacing={2}>
              <Grid xs={12} md={8}>
                <div className="camping-detail-main-img">
                  <div
                    style={{
                      backgroundImage:
                        "url(" + `${campingDetail.firstImageUrl}` + ")",
                    }}
                    className="img"
                  ></div>
                </div>
              </Grid>
              <Grid xs={12} md={4}>
                <div className="camping-detail-second-grid">
                  <h1>{campingDetail.facltNm}</h1>
                  <h5>
                    {campingDetail.lineIntro
                      ? `${campingDetail.lineIntro}`
                      : ""}
                  </h5>
                  <div>{campingDetail.addr1}</div>
                  <div>
                    {campingDetail.tel
                      ? `문의처 : ${campingDetail.tel}`
                      : "문의번호가 없습니다"}
                  </div>
                  <div>
                    {" "}
                    {campingDetail.operPdCl
                      ? `운영기간 : ${campingDetail.operPdCl}`
                      : ""}{" "}
                  </div>
                  <div>
                    {campingDetail.operDeCl
                      ? `운영일 : ${campingDetail.operDeCl}`
                      : ""}
                  </div>
                  <div>
                    {campingDetail.resveCl
                      ? `예약방법 : ${campingDetail.resveCl}`
                      : ""}
                  </div>
                  <div className="camping-detail-second-grid-urls">
                    {campingDetail.homepage ? (
                      <Button
                        onClick={() => window.open(`${campingDetail.homepage}`)}
                        className="camping-detail-url"
                      >
                        홈페이지 바로가기
                      </Button>
                    ) : (
                      ""
                    )}
                    {campingDetail.resveUrl ? (
                      <Button
                        onClick={() => window.open(`${campingDetail.resveUrl}`)}
                        className="camping-detail-url"
                      >
                        예약사이트 바로가기
                      </Button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {campingDetail.siteBottomCl1 > 0
                      ? `바닥형태(단위:면) : 잔디(${campingDetail.siteBottomCl1})`
                      : ""}
                  </div>
                  <div>
                    {campingDetail.siteBottomCl2 > 0
                      ? `바닥형태(단위:면) : 파쇄석(${campingDetail.siteBottomCl2})`
                      : ""}
                  </div>
                  <div>
                    {campingDetail.siteBottomCl3 > 0
                      ? `바닥형태(단위:면) : 테크(${campingDetail.siteBottomCl3})`
                      : ""}
                  </div>
                  <div>
                    {campingDetail.siteBottomCl4 > 0
                      ? `바닥형태(단위:면) : 자갈(${campingDetail.siteBottomCl4})`
                      : ""}
                  </div>
                  <div>
                    {campingDetail.siteBottomCl5 > 0
                      ? `바닥형태(단위:면) : 맨흙(${campingDetail.siteBottomCl5})`
                      : ""}
                  </div>
                  <div>
                    {campingDetail.siteBottomCl1 > 0
                      ? `잔디데크 : ${campingDetail.siteBottomCl1}개`
                      : ""}
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="camping-detail-map-line">
              <CampingDetailMap
                lat={lat}
                lon={lon}
                name={campingDetail.facltNm}
              />
            </div>
            <div className="camping-detail-weather-line">
              <CampingDetailWeather
                lat={lat}
                lon={lon}
                name={campingDetail.facltNm}
              />
            </div>
            <div className="camping-detail-second-line">
              {campingDetail.intro
                ? `${campingDetail.intro}`
                : `이번 캠핑은 ${campingDetail.facltNm}에서 함께하는건 어떨까요? 공기 좋은 곳에서 소중한 순간을 보내게 해주는 ${campingDetail.facltNm}입니다.`}
            </div>
            <div className="camping-detail-second-line-count"></div>
            <div className="comping-detail-table-area">
              <div className="comping-detail-table-area-inside">
                <div className="comping-detail-table-area-title">
                  캠핑장 시설정보
                </div>
                <TableContainer
                  component={Paper}
                  className="comping-detail-table"
                >
                  <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            className="comping-detail-table-row"
                            sx={{ width: 1 / 2 }}
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.decription}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="comping-detail-table-area-footer">
                  * 캠핑어때에 등록된 정보는 현장상황과 다소 다를 수 있으니
                  반려동물 동반 여부, 부가 시설물, 추가차량 등 원활한 캠핑을
                  위해 꼭 필요한 사항은 해당 캠핑장에 미리 확인하시기 바랍니다
                </div>
              </div>
              <div className="camping-detail-attraction-line">
                <AttractionCarousel
                  attractData={CampingRecommendItemList}
                  title={campingDetail.facltNm + " 주변 갈만한 곳"}
                />
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div>존재하지 않는 캠핑장입니다.</div>
      )}
    </div>
  );
};

export default CampingDetailPage;
