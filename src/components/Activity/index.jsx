import React from "react";
import Typography from "@mui/material/Typography";
import ActivityItem from "./ActivityItem";
import useFetch from "../../hooks/useFetch";
import { fetchActivities } from "../../services/api";
import Loader from "../Loader";

const Activity = () => {
  const { data, loading } = useFetch(fetchActivities);
  return (
    <div>
      <Typography gutterBottom variant="h5" my={3}>
        Activity
      </Typography>
      {!loading ? (
        data.map((item) => (
          <ActivityItem number={item.number} title={item.title} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Activity;
