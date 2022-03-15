import React from "react";
import Banner from "../components/Banner/Banner";
import Owners from "../components/Owners/Owners";
import RoadMap from "../components/RoadMap/RoadMap";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import ListedOn from "../components/ListedOn/ListedOn";
import Trails from "../components/Trails/Trails";
import Faq from "../components/Faq/Faq";
import "../asset/css/Home.css";

export default function Home() {
  return (
    <>
      <Banner />
      <ImageSlider />
      <Trails />
      <ListedOn />
      <RoadMap />
      <Owners />
      <Faq />
    </>
  );
}
