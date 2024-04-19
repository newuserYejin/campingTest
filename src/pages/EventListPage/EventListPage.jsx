import React, { useState } from "react";
import "./EventListPage.style.css";
import { Container, Pagination } from "@mui/material";
import ListGalleryItem from "../../components/ListGalleryItem/ListGalleryItem";
import { useFetchEvent } from "../../hooks/useFetchEvent";
import { useAreaCode } from "../../hooks/useAreaCode";
import CircularProgress from "@mui/material/CircularProgress";

const EventListPage = () => {
  let [CurrentPage, setCurrentPage] = useState(1);

  const {
    data: EventList,
    isLoading,
    isError,
    error,
  } = useFetchEvent({ CurrentPage });

  const { data: AreaData } = useAreaCode();

  if (isLoading) {
    return (
      <div className="loading_Zone">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log("Event List:", EventList);
  console.log("AreaData:", AreaData);

  let realList = [];
  let Arealist = [];
  realList = EventList?.body?.items?.item;
  Arealist = AreaData?.item;
  console.log("realList:", realList);

  const changePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Container
      className="event-list-wrap"
      sx={{
        margin: "4em auto",
      }}
    >
      <p>
        총 <strong>{EventList.body.totalCount}</strong>개 행사장이
        검색되었습니다.
      </p>
      <div className="list-gallery-wrap">
        {realList?.map((item) => {
          return (
            <ListGalleryItem
              isConnect={item.tel ? true : false}
              isLink={item.addr1 ? true : false}
              item={item}
            />
          );
        })}
        {/* <ListGalleryItem isLink={true} />
        <ListGalleryItem isConnect={true} />
        <ListGalleryItem /> */}
      </div>

      <Pagination
        count={12}
        page={CurrentPage}
        defaultPage={1}
        siblingCount={0}
        size="large"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2em",
        }}
        onChange={changePage}
      />
    </Container>
  );
};

export default EventListPage;
