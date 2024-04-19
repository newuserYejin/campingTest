import React, { useEffect } from "react";
import "./CampingDetailMap.style.css";
import { Button } from "@mui/base/Button";

const { kakao } = window;

const CampingDetailMap = ({ lat, lon, name }) => {
  console.log("name", name);
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(lat, lon);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    //   title: title,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };
  return (
    <div className="camping-detail-map-area">
      <h1>{`${name}`} 위치</h1>
      <div
        id="map"
        style={{ width: "100%", height: "400px" }}
        className="camping-detail-map"
      ></div>
      <div className="camping-detail-map-url-area">
        <div>{`우리집에서 ${name}까지 가려면?`}</div>
        <Button
          onClick={() =>
            window.open(`https://map.kakao.com/link/to/${name},${lat},${lon}`)
          }
          className="camping-detail-map-url"
        >
          카카오맵 바로가기
        </Button>
      </div>
    </div>
  );
};

export default CampingDetailMap;
