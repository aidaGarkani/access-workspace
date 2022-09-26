import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const colorFinder = (number) => {
  return number < 50 ? "error" : number < 80 ? "warning" : "success";
};

const Progress = ({ percent }) => {
  return (
    <Box sx={{ width: "30%" }}>
      <div style={{ textAlign: "center", fontSize: 10 }}>
        {percent}% Completed
      </div>
      <LinearProgress
        variant="determinate"
        color={colorFinder(percent)}
        value={percent}
      />
    </Box>
  );
};

export default Progress;
