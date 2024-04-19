import React from "react";
import { useFetchLocation } from "../../../../hooks/useFetchLocation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import AttractionCarousel from "./AttractionCarousel";
import "./Current.style.css";
import CircularProgress from "@mui/material/CircularProgress";

const Current = ({ userLat, userLot }) => {
  const {
    data: apiData,
    isLoading,
    isError,
    error,
  } = useFetchLocation(userLat, userLot, 5000);

  // const {
  //   data: apiData,
  //   isLoading,
  //   isError,
  //   error,
  // } = useFetchLocation(127.5612654, 37.7300273, 3000);

  const {
    data: RecommandData,
    isLoading: RecommandIsLoading,
    isError: RecommandIsError,
    error: RecommandError,
  } = useFetchLocation(37.4594355, 126.364195, 20000);

  if (isLoading) {
    return (
      <div className="loading_Zone">
        <CircularProgress />
      </div>
    );
  }

  console.log("Current userLat", userLat, "Current userLot:", userLot);

  let itemList = [];
  let attractData = [];
  let RecommandItemList = [];
  let RecommendAttractData = [];
  // itemList = apiData?.data.response.body.items.item;
  itemList = apiData?.data.response;
  attractData = itemList?.body.items?.item;

  RecommandItemList = RecommandData?.data.response;
  RecommendAttractData = RecommandItemList?.body.items?.item;
  console.log("itemList:", itemList);
  console.log("RecommandItemList:", RecommandItemList);

  return (
    <div className="AttractionCarousel">
      {itemList?.body.items === "" ? null : (
        <AttractionCarousel
          attractData={attractData}
          title="우리 집 주변 관광지"
          // itemsPerPage={itemsPerPage}
        />
      )}

      {itemList?.body.items === "" ? null : <hr></hr>}

      <AttractionCarousel
        attractData={RecommendAttractData}
        title="요즘 추천 관광지"
        // itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Current;
