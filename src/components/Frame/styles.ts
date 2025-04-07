import { Container, styled } from "@mui/material";

export const StyledFrame = styled(Container)(() => ({
  height: "100%",
  borderTop: "0",
  borderBottom: "0",
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  position: "relative",
}));
