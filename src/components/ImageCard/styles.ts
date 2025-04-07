import { Box, styled } from "@mui/material";

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(0.5),
}));

export const StyledImageBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  border: `3px solid ${theme.palette.common.white}`,
  boxShadow: "0px 2.12px 4.23px -0.53px #0000001A",
}));
