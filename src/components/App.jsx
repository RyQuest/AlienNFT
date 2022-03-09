import React from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Owners from "./Owners/Owners";
import RoadMap from "./RoadMap/RoadMap";
import ImageSlider from "./ImageSlider/ImageSlider";
import ListedOn from "./ListedOn/ListedOn";
import Trails from "./Trails/Trails";
import Faq from "./Faq/Faq";
import "../asset/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ImageSlider />
      <Trails />
      <ListedOn />
      <RoadMap />
      <Owners />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
