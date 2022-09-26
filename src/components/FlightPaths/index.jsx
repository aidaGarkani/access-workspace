import React from "react";
import { Title } from "./FlightPathsStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ATabs from "./ATabs";

const FlightPaths = () => {
  return (
    <div style={{ height: "380px" }}>
      <Title>
        <Typography variant="h4">My FlightPaths</Typography>
        <Button
          endIcon={<ArrowRightAltIcon />}
          sx={{ fontSize: 12, textDecoration: "underline" }}
          color="secondary"
        >
          View All FlightPaths
        </Button>
      </Title>
      <ATabs />
    </div>
  );
};

export default FlightPaths;
