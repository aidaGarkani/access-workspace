import React from "react";
import Typography from "@mui/material/Typography";
import { ACPaper } from "../FlightPaths/FlightPathsStyles";
import useFetch from "../../hooks/useFetch";
import { fetchQuickLinks } from "../../services/api";
import LinksItem from "./LinksItem";
import Loader from "../Loader";

const QuickLinks = () => {
  const { data, loading } = useFetch(fetchQuickLinks);
  return (
    <>
      <Typography gutterBottom variant="h5" my={3}>
        Quick Links
      </Typography>
      <ACPaper style={{ padding: 5, minHeight: "300px" }}>
        {!loading ? (
          data.map((item) => (
            <LinksItem
              type={item.type}
              title={item.title}
              typeId={item.typeId}
            />
          ))
        ) : (
          <Loader />
        )}
      </ACPaper>
    </>
  );
};

export default QuickLinks;
