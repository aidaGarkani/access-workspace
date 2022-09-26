import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Active from "./Active";
import Completed from "./Completed";
import useFetch from "../../hooks/useFetch";
import { fetchFlightPaths } from "../../services/api";
import Loader from "../Loader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box my={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ATabs() {
  const [value, setValue] = React.useState(0);
  const { data, loading } = useFetch(fetchFlightPaths);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (loading) return <Loader />;
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab
            label={`Active (${
              data.filter((item) => item.status !== 100).length
            })`}
            {...a11yProps(0)}
          />
          <Tab
            label={`Completed (${
              data.filter((item) => item.status === 100).length
            })`}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Active data={data.filter((item) => item.status !== 100)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Completed data={data.filter((item) => item.status === 100)} />
      </TabPanel>
    </Box>
  );
}
