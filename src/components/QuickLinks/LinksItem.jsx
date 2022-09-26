import React from "react";
import { Flex } from "../shared";
import { Container } from "./LinksItemStyles";
import Typography from "@mui/material/Typography";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

const iconFinder = (typeId) => {
  return typeId === 1 ? (
    <AutoStoriesOutlinedIcon />
  ) : typeId === 2 ? (
    <ContentCopyOutlinedIcon />
  ) : typeId === 3 ? (
    <InsertDriveFileOutlinedIcon />
  ) : (
    <LinkOutlinedIcon />
  );
};

const LinksItem = ({ type, title, typeId }) => {
  return (
    <Container>
      <Flex style={{ justifyContent: "flex-start" }}>
        <div>{iconFinder(typeId)}</div>
        <div>
          <Typography variant="subtitle1" sx={{ fontSize: 10 }}>
            {type}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: 12 }}>
            {title}
          </Typography>
        </div>
      </Flex>
    </Container>
  );
};

export default LinksItem;
