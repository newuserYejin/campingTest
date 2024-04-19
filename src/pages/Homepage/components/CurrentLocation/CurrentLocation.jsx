import React from "react";
import { useState, useEffect } from "react";
import Current from "./Current";
import "./CurrentLocation.style.css";

const CurrentLocation = () => {
  const [userLat, setUserLat] = useState();
  const [userLot, setUserLot] = useState();

  // 사용자 현 위치 받기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      setUserLat(lat);
      setUserLot(lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // useEffect(() => {
  //   console.log("userLat:", userLat, "userLot:", userLot);
  // }, [userLat, userLot]);

  return (
    <div className="attractionArea">
      {userLat && userLot && <Current userLat={userLat} userLot={userLot} />}
    </div>
  );
};

export default CurrentLocation;
