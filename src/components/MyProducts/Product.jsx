import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Paper } from "@mui/material";

const Product = ({ item: { image, name, type, subscription } }) => {
  return (
    <Paper
      style={{
        textAlign: "center",
        margin: 10,
        minWidth: "130px",
        padding: 5,
        paddingTop: 10,
      }}
    >
      <img width={50} src={image} alt={name} />
      <Typography mt={1} variant="subtitle1" sx={{ fontSize: 10 }}>
        {name}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: 12 }}>
        {type}
      </Typography>
      <Box my={2}>
        <Chip
          label={subscription}
          variant="outlined"
          color={subscription === "Premium" ? "primary" : "secondary"}
        />
      </Box>
    </Paper>
  );
};

export default Product;
