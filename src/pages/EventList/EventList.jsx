import React from "react";
import { useFetchEvent } from "../../hooks/useFetchEvent";
import { useAreaCode } from "../../hooks/useAreaCode";
import "./EventList.style.css";

const EventList = () => {
  const { data: EventList, isLoading, isError, error } = useFetchEvent();
  const { data: AreaData } = useAreaCode();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log("Event List:", EventList);
  console.log("AreaData:", AreaData);

  let realList = [];
  let Arealist = [];
  realList = EventList?.body.items.item;
  Arealist = AreaData?.item;
  console.log("realList:", realList);

  return (
    <div>
      {realList?.map((eventItem) => {
        return (
          <div className="eventItem">
            <img
              src={
                eventItem.firstimage ||
                eventItem.firstimage2 ||
                "../../../src/assets/whatAboutCampingLogo.png"
              }
            ></img>
            <div>
              <div>
                지역:
                {Arealist?.map((Area) => {
                  if (Area.code == eventItem.areacode) {
                    return Area.name;
                  }
                })}
              </div>
              <div>제목: {eventItem.title}</div>
              <div>주소: {eventItem.addr1}</div>
              <div>번호: {eventItem.tel}</div>
              <div>시작일: {eventItem.eventstartdate}</div>
              <div>종료일: {eventItem.eventenddate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
