import React from "react";
import { Flex } from "../shared";
import { ACPaper } from "./ActivityStyles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ActivityItem = ({ number, title, link }) => {
  return (
    <ACPaper style={{ paddingLeft: "20px" }}>
      <Flex>
        <div>
          <Typography variant="h5">{number}</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
        </div>
        <IconButton>
          <ArrowRightAltIcon />
        </IconButton>
      </Flex>
    </ACPaper>
  );
};

export default ActivityItem;
