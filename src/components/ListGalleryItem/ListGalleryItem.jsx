import React from "react";
import "./ListGalleryItem.style.css";
import { useAreaCode } from "../../hooks/useAreaCode";
import { Masonry } from "@mui/lab";

const ListGalleryItem = ({ isConnect = false, isLink = false, item }) => {
  const { data: AreaData } = useAreaCode();
  let AreaList = [];
  AreaList = AreaData.item;

  const sampleFn = () => {
    // isLink=true 링크가 있을 때 (상세페이지)
  };

  return (
    <div className="list-gallery-item">
      <div
        className={isLink ? "gallery-item-top pointer " : "gallery-item-top"}
        onlick={isLink ? sampleFn : null}
      >
        <div className="gallery-item-thumb tnumb">
          <img
            src={
              item.firstimage ||
              item.firstimage2 ||
              "../../../src/assets/whatAboutCampingLogo.png"
            }
            alt={item.title + "사진"}
          />
        </div>
        <div className="gallery-item-info">
          <div className="flag">
            <span>
              #
              {AreaList.map((area) => {
                if (area.code == item.areacode) {
                  return area.name;
                }
              })}
            </span>
            <span>#칠곡군</span>
          </div>
          <h3 className="title">{item.title}</h3>
          <ul>
            <li>
              🗓️
              <span className="eventstartdate">
                {`${item.eventstartdate.slice(0, 4)}
                  .${item.eventstartdate.slice(4, 6)}
                  .${item.eventstartdate.slice(6, 8)}`}
                ~
              </span>
              <span className="eventenddate">
                {`${item.eventenddate.slice(0, 4)}
                  .${item.eventenddate.slice(4, 6)}
                  .${item.eventenddate.slice(6, 8)}`}
              </span>
            </li>

            <li className="addr">👉🏻 {item.addr1}</li>
            <li className="tel">📞 {item.tel}</li>
          </ul>
        </div>
      </div>

      {
        // isConnect=true 일 때 전화, 지도 버튼 노출
        isConnect && (
          <div className="gallery-item-connect">
            <a className="connect connect-call" href={item.tel}>
              전화
            </a>
            <a
              className="connect connect-map"
              href={`https://map.naver.com/p/search/${item.addr1}`}
              target="_blank"
              rel="noreferrer"
            >
              지도
            </a>
          </div>
        )
      }
    </div>
  );
};

export default ListGalleryItem;
