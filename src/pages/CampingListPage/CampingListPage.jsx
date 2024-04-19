import React, { useState } from "react";
import ListCardPage from "./components/ListCardPage/ListCardPage";
import { Container, Button } from "@mui/material";

const CampingListPage = () => {
  return (
    <Container
      className="camping-list-wrap"
      sx={{
        margin: "4em auto",
      }}>
      <ListCardPage />
    </Container>
  );
};

export default CampingListPage;
