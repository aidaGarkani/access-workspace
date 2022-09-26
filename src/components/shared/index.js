import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
// import COLORS from "../../theme/colors";

export const ABody = styled("div")({
  margin: "20px 20px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
});

export const APaper = styled(Paper)({
  padding: 10,
  marginLeft: 10,
  marginRight: 20,
});

export const Flex = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
});

export const ACBody = styled("div")({
  width: "55%",
  minWidth: "400px",
});
