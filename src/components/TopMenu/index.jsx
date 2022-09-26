import React, { useState } from "react";
import { Container, MenuRightSide } from "./TopMenuStyles";
import { ReactComponent as AccessLogo } from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const TopMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <div>
        <AccessLogo />
      </div>
      <MenuRightSide>
        <FormControl sx={{ width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            Search
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        <div>
          <Badge badgeContent={4} color="primary" overlap="circular">
            <NotificationsNoneOutlinedIcon
              color="action"
              style={{ fontSize: 30 }}
            />
          </Badge>
        </div>
      </MenuRightSide>
    </Container>
  );
};

export default TopMenu;
