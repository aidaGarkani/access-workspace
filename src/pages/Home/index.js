import React from "react";
import Activity from "../../components/Activity";
import FlightPaths from "../../components/FlightPaths";
import Help from "../../components/Help";
import NewsCarousel from "../../components/NewsCarousel";
import { ACBody, Flex } from "../../components/shared";
// import { APaper } from "../../components/shared";
import RightSideBar from "../../components/SideBars/RightSideBar";
import QuickLinks from "../../components/QuickLinks";

const Home = () => {
  return (
    <>
      <ACBody>
        <FlightPaths />
        <Flex>
          <div style={{ width: "49%" }}>
            <Activity />
          </div>
          <div style={{ width: "49%" }}>
            <Help />
          </div>
        </Flex>
      </ACBody>
      <RightSideBar>
        <NewsCarousel />
        <QuickLinks />
      </RightSideBar>
    </>
  );
};

export default Home;
