import React from "react";
import { Container } from "@mui/material";
import TopBanner from "./components/TopBanner";
import CurrentLocation from "./components/CurrentLocation/CurrentLocation";
import TagSearch from "./components/TagSearch";

const Homepage = () => {
  return (
    <section>
      <TopBanner />
      <Container maxWidth="xl">
        <CurrentLocation />
        <TagSearch/>
      </Container>
    </section>
  );
};

export default Homepage;
