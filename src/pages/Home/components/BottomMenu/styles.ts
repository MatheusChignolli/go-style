import { IconButton, Stack, styled } from "@mui/material";

export const StyledBottomMenu = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  bottom: theme.spacing(2),
  gap: theme.spacing(2),
  left: "calc(50% - 83px)",
  position: "absolute",
  width: "fit-content",
  flexDirection: "row",
  justifyContent: "center",
  borderRadius: "100px",
  background: theme.palette.primary.main,
}));

export const StyledIconButton = styled(IconButton)<{ negative?: boolean }>(
  ({ theme, negative }) => ({
    color: negative
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText,
    backgroundColor: negative ? theme.palette.background.default : "inherit",
  })
);
