import { Button, Stack, styled, Typography } from "@mui/material";

export const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
}));

export const StyledAnimatedTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  animation: `StyledAnimatedTypography 2s ease-in-out forwards`,
  "@keyframes StyledAnimatedTypography": {
    from: {
      opacity: 0,
      transform: "translateY(-100px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

export const StyledDivider = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: 4,
  width: "100%",
  position: "absolute",
  top: -8,
  left: 0,
  animation: `StyledDividerAnimation 2s ease-in-out forwards`,

  ":before": {
    content: "''",
    height: 2,
    width: "100%",
    position: "absolute",
    top: -6,
    left: 0,
    backgroundColor: theme.palette.background.default,
    animation: `StyledDividerAnimation 2s ease-in-out forwards`,
  },
  ":after": {
    content: "''",
    height: 1,
    width: "100%",
    position: "absolute",
    top: -11,
    left: 0,
    backgroundColor: theme.palette.background.default,
    animation: `StyledDividerAnimation 2s ease-in-out forwards`,
  },

  "@keyframes StyledDividerAnimation": {
    from: {
      transform: "translateY(4px)",
    },
    to: {
      transform: "translateY(0)",
    },
  },
}));

export const StyledLoginOptions = styled(Stack)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4, 3),
  animation: `StyledLoginOptions 2s ease-in-out forwards`,
  "@keyframes StyledLoginOptions": {
    from: {
      opacity: 0,
      transform: "translateY(500px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

export const StyledLoginButton = styled(Button)(({ theme }) => ({
  width: 278,
  padding: theme.spacing(2),
  textTransform: "none",
  fontSize: "0.9375rem",
  fontWeight: 500,
  display: "flex",
  gap: theme.spacing(1),
}));

export const StyledIcon = styled("img")(() => ({
  width: 20,
  height: 20,
}));

export const StyledCtaTypography = styled(Typography)(() => ({
  fontSize: "0.9375rem",
  fontWeight: 500,
  textAlign: "center",
  lineHeight: "18px",
}));
