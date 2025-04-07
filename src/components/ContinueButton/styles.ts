import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  width: 245,
  padding: theme.spacing(2),
  margin: "auto",
  borderRadius: 60,
  textTransform: "capitalize",
  fontSize: "0.9375rem",
  lineHeight: "18px",
  fontWeight: 700,
}));
