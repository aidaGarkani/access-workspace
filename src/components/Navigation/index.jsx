import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { AListItemIcon } from "./NavigationStyles";
import { NavLink } from "react-router-dom";
import COLORS from "../../theme/colors";

const NavigationItem = ({ title, to, Icon }) => {
  const [active, setActive] = useState();
  return (
    <ListItem
      component={NavLink}
      style={({ isActive }) =>
        isActive
          ? {
              borderLeft: `4px solid ${COLORS.PRIMARY}`,
              backgroundColor: "#ececec",
            }
          : undefined
      }
      to={to}
      disablePadding
      end
    >
      <ListItemButton>
        <AListItemIcon>
          <Icon />
        </AListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

const Navigation = () => {
  return (
    <Box mx={2.5} my={4}>
      <nav aria-label="main mailbox folders">
        <List dense>
          <NavigationItem title="Home" to="/" Icon={HomeIcon} />
          <NavigationItem
            title="My Products & Flightpaths"
            to="/myprods"
            Icon={AccessTimeIcon}
          />
          <ListItem disablePadding>
            <ListItemButton>
              <AListItemIcon>
                <FavoriteBorderIcon />
              </AListItemIcon>
              <ListItemText primary="Resources" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <AListItemIcon>
                <ShoppingCartOutlinedIcon />
              </AListItemIcon>
              <ListItemText primary="SOW / Service Requests" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <AListItemIcon>
                <SettingsOutlinedIcon />
              </AListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Navigation;
