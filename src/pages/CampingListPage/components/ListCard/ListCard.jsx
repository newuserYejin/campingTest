import React from "react";
import "./ListCard.style.css";
import FacilityIcon from "../../../../components/FacilityIcon/FacilityIcon";
import { Link } from "react-router-dom";

const facilitySampleList = [
  "전기",
  "와이파이",
  "장작판매",
  "온수",
  "물놀이장",
  "놀이터",
  "운동시설",
];

const ListCard = ({ data, facilityData, index }) => {

  return (
    <div className="list-item">
      <div className="list-thumb">
        <Link to="">
          <img
            src={data?.firstImageUrl == '' ? 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwatermark.lovepik.com%2Fphoto%2F40023%2F1965.jpg_wh1200.jpg&type=sc960_832':data?.firstImageUrl}
            alt=''
          />
        </Link>
      </div>

      <div className="list-details">
        <hgroup className="lit-title">
          <h3 className="list-facltNm">
            <Link to="#">{data?.facltNm}</Link>
          </h3>
          <h4 className="list-lineIntro">
            <Link to="#">{data?.featureNm.substring(0, 120)}...</Link>
          </h4>
        </hgroup>

        <div className="list-info">
          <dl className="list-addr">
            <dt>주소</dt>
            <dd>{data?.addr1}</dd>
          </dl>
          <dl className="list-tel">
            <dt>홈페이지</dt>
            <dd><a href={data?.homepage}>{data?.homepage}</a></dd>
          </dl>
          <dl className="list-operPdCl">
            <dt>운영계절</dt>
            <dd>{data?.operPdCl}</dd>
          </dl>
          <dl className="list-operDeCl">
            <dt>운영요일</dt>
            <dd>{data?.operDeCl}</dd>
          </dl>
          <dl className="list-animalCmgCl">
            <dt>애완동물</dt>
            <dd>{data?.animalCmgCl}</dd>
          </dl>
          <dl>
            <dt>시설정보</dt>
            <dd className="list-sbrsCl">
              <ul>
                {facilityData[index].map((item) => (
                  <li>
                    <FacilityIcon name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
