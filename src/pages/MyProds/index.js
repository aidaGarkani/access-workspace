import React from "react";
import FlightPaths from "../../components/FlightPaths";
import Help from "../../components/Help";
import MyProducts from "../../components/MyProducts";
import NewsCarousel from "../../components/NewsCarousel";
import { ACBody, Flex } from "../../components/shared";
import RightSideBar from "../../components/SideBars/RightSideBar";

const MyProds = () => {
  return (
    <>
      <ACBody>
        <MyProducts />
        <FlightPaths />
      </ACBody>
      <RightSideBar>
        <NewsCarousel />
        <Help />
      </RightSideBar>
    </>
  );
};

export default MyProds;
