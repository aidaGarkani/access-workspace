import React from "react";
import { ACPaper } from "../FlightPaths/FlightPathsStyles";
import Typography from "@mui/material/Typography";
import ContactItem from "./ContactItem";
import Divider from "@mui/material/Divider";
import { Flex } from "../shared";
import Button from "@mui/material/Button";

const Help = () => {
  return (
    <div>
      <Typography gutterBottom variant="h5" my={3}>
        Help
      </Typography>
      <ACPaper>
        <ContactItem name="Name" role="Sales Manager" />
        <ContactItem name="Name" role="CSM" />
        <Divider variant="middle" sx={{ my: 2 }} />
        <Flex style={{ marginBottom: "6px" }}>
          <Typography variant="h6" sx={{ fontSize: 15 }}>
            Get Support
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{ px: 4 }}
          >
            Link
          </Button>
        </Flex>
      </ACPaper>
    </div>
  );
};

export default Help;
