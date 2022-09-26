import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import COLORS from "../../theme/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ContactItem = ({ name, role }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      my={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <div>
          <Avatar sx={{ bgcolor: COLORS.PRIMARY, width: 35, height: 35 }}>
            AC
          </Avatar>
        </div>
        <div>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="subtitle1">{role}</Typography>
        </div>
      </Stack>
      <Button variant="contained" size="small" color="secondary">
        Contact
      </Button>
    </Stack>
  );
};

export default ContactItem;
