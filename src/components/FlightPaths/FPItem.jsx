import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Flex } from "../shared";
import { ACPaper, FPCart } from "./FlightPathsStyles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Progress from "./Progress";
import Divider from "@mui/material/Divider";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const FPItem = ({ item: { image, name, id, status, nextStep } }) => {
  const [show, setShow] = useState(false);
  return (
    <ACPaper>
      <FPCart>
        <Flex>
          <img width={50} src={image} alt={name} />
          <div>
            <Typography variant="subtitle1">{id}</Typography>
            <Typography variant="subtitle2">{name}</Typography>
          </div>
        </Flex>
        <Flex style={{ width: "60%" }}>
          <Progress percent={status} />
          <Button
            size="small"
            variant={show ? "contained" : "outlined"}
            sx={{ fontSize: 11 }}
            onClick={() => setShow(!show)}
          >
            View Next Step
          </Button>
          <Button
            endIcon={<ArrowRightAltIcon />}
            sx={{ fontSize: 10, textDecoration: "underline" }}
            color="secondary"
          >
            View Details
          </Button>
        </Flex>
      </FPCart>
      {show && (
        <>
          <Typography variant="caption">Your Next Step</Typography>
          <Divider />
          <FPCart
            style={{ paddingLeft: 5, paddingRight: 5, alignItems: "center" }}
          >
            <div style={{ width: "70%" }}>
              <ReportProblemOutlinedIcon
                sx={{ fontSize: 12 }}
                color="warning"
              />{" "}
              <span style={{ fontSize: 10, fontWeight: 700 }}>
                {nextStep.title}
              </span>
              <div style={{ fontSize: 10, fontWeight: 600 }}>
                {nextStep.description}
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                size="small"
                endIcon={<ArrowRightAltIcon />}
                sx={{ fontSize: 10, mr: 2 }}
              >
                Review Your website
              </Button>
            </div>
          </FPCart>
        </>
      )}
    </ACPaper>
  );
};

export default FPItem;
