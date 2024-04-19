import React from "react";
import "./CampingDetailWeather.style.css";
import {
  useFiveDaysWeatherQuery,
  useWeatherQuery,
} from "../../../hooks/useWeather";
import CircularProgress from "@mui/material/CircularProgress";

const CampingDetailWeather = ({ lat, lon, name}) => {
  // const { data, isLoading } = useWeatherQuery(lat, lon);
  const { data, isLoading } = useFiveDaysWeatherQuery(lat, lon);

  // console.log("data", data);

  if (isLoading) {
    return (
      <div className="loading_wrap">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="camping-detail-weather">
      <div className="camping-detail-weather-box-area">
        <h1>{`${name}`} 주변 5일 날씨</h1>
        <div className="camping-detail-weather-box-5days">
          <div className="camping-detail-weather-box-1day">
            <div>{`${data?.list[2].dt_txt.substr(
              5,
              2
            )}월 ${data?.list[2].dt_txt.substr(8, 2)}일`}</div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.list[2].weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div>{data?.list[2].weather[0].description}</div>
            <div>{`현재 온도 : ${Math.round(data?.list[2]?.main.temp)}℃`}</div>
            <div>{`(${Math.round(data?.list[2]?.main.temp_min)}℃/${Math.round(
              data?.list[2]?.main.temp_max
            )}℃)`}</div>
            <div>{`강수확률 : ${data?.list[2]?.pop * 100}%`}</div>
            <div>{`습도 : ${Math.round(data?.list[2]?.main.humidity)}%`}</div>
          </div>

          <div className="camping-detail-weather-box-1day">
            <div>{`${data?.list[10].dt_txt.substr(
              5,
              2
            )}월 ${data?.list[10].dt_txt.substr(8, 2)}일`}</div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.list[10].weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div>{data?.list[10].weather[0].description}</div>
            <div>{`현재 온도 : ${Math.round(data?.list[10]?.main.temp)}℃`}</div>
            <div>{`(${Math.round(data?.list[10]?.main.temp_min)}도/${Math.round(
              data?.list[10]?.main.temp_max
            )}℃)`}</div>
            <div>{`강수확률 : ${data?.list[10]?.pop * 100}%`}</div>
            <div>{`습도 : ${Math.round(data?.list[10]?.main.humidity)}%`}</div>
          </div>
          <div className="camping-detail-weather-box-1day">
            <div>{`${data?.list[18].dt_txt.substr(
              5,
              2
            )}월 ${data?.list[18].dt_txt.substr(8, 2)}일`}</div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.list[18].weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div>{data?.list[18].weather[0].description}</div>
            <div>{`현재 온도 : ${Math.round(data?.list[18]?.main.temp)}℃`}</div>
            <div>{`(${Math.round(data?.list[18]?.main.temp_min)}℃/${Math.round(
              data?.list[18]?.main.temp_max
            )}℃)`}</div>
            <div>{`강수확률 : ${data?.list[18]?.pop * 100}%`}</div>
            <div>{`습도 : ${Math.round(data?.list[18]?.main.humidity)}%`}</div>
          </div>
          <div className="camping-detail-weather-box-1day">
            <div>{`${data?.list[26].dt_txt.substr(
              5,
              2
            )}월 ${data?.list[26].dt_txt.substr(8, 2)}일`}</div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.list[26].weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div>{data?.list[26].weather[0].description}</div>
            <div>{`현재 온도 : ${Math.round(data?.list[26]?.main.temp)}℃`}</div>
            <div>{`(${Math.round(data?.list[26]?.main.temp_min)}℃/${Math.round(
              data?.list[26]?.main.temp_max
            )}℃)`}</div>
            <div>{`강수확률 : ${data?.list[26]?.pop * 100}%`}</div>
            <div>{`습도 : ${Math.round(data?.list[26]?.main.humidity)}%`}</div>
          </div>
          <div className="camping-detail-weather-box-lastday">
            <div>{`${data?.list[2].dt_txt.substr(
              5,
              2
            )}월 ${data?.list[34].dt_txt.substr(8, 2)}일`}</div>
            <img
              src={`https://openweathermap.org/img/wn/${data?.list[34].weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div>{data?.list[34].weather[0].description}</div>
            <div>{`현재 온도 : ${Math.round(data?.list[34]?.main.temp)}℃`}</div>
            <div>{`(${Math.round(data?.list[34]?.main.temp_min)}℃/${Math.round(
              data?.list[34]?.main.temp_max
            )}℃)`}</div>
            <div>{`강수확률 : ${data?.list[34]?.pop * 100}%`}</div>
            <div>{`습도 : ${Math.round(data?.list[34]?.main.humidity)}%`}</div>
          </div>
        </div>
      </div>

      <div className="camping-detail-weather-box-area-mobile">
        <h1>{`${name}`} 의 내일 날씨</h1>
        <div className="camping-detail-weather-box-mobile">
          <div>{`${data?.list[8].dt_txt.substr(
            5,
            2
          )}월 ${data?.list[8].dt_txt.substr(8, 2)}일`}</div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[8].weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <h5>{data?.list[8].weather[0].description}</h5>
          <h3>{`현재 온도 : ${Math.round(data?.list[8]?.main.temp)}℃`}</h3>
          <h6>{`(${Math.round(data?.list[8]?.main.temp_min)}℃/${Math.round(
            data?.list[8]?.main.temp_max
          )}℃)`}</h6>
          <h6>{`강수확률 : ${data?.list[8]?.pop * 100}%`}</h6>
          <h6>{`습도 : ${Math.round(data?.list[8]?.main.humidity)}%`}</h6>
        </div>
      </div>
    </div>
  );
};

export default CampingDetailWeather;
