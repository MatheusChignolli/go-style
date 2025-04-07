import { Stack, styled } from "@mui/material";

export const StyledBodyTypeCard = styled(Stack)<{
  selected: boolean;
}>(({ theme, selected }) => ({
  cursor: "pointer",
  width: "70vw",
  maxWidth: "300px",
  height: "100%",
  background: theme.palette.background.default,
  border: `5px solid ${
    selected ? theme.palette.common.black : theme.palette.background.default
  }`,
  borderRadius: theme.spacing(1),
  boxShadow: "0px 4px 8px -1px #0000001A",
  transition: "border-color 0.3s ease-in-out",
}));

export const StyledBodyTypeCardSelection = styled(Stack)<{
  selected: boolean;
  custom: boolean;
}>(({ theme, selected, custom }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: custom ? "100%" : "auto",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(2.5),
  transition: "0.3s ease-out",
  opacity: selected ? 1 : 0,
  zIndex: selected ? 1 : -1,
  transform: selected
    ? "translateY(0) scale(1)"
    : "translateY(20px) scale(0.97)",
}));
