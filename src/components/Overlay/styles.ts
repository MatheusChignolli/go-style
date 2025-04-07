import { Stack, styled, Typography } from "@mui/material";

export const StyledOverlay = styled(Stack)<{ delay: number }>(
  ({ theme, delay }) => ({
    zIndex: "99",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    background: theme.palette.common.black,
    position: "absolute",
    animation: "fadeOutUp 1s ease-in-out forwards",
    animationDelay: `${delay / 1000 - 1}s`,
    "@keyframes fadeOutUp": {
      from: {
        transform: "translateY(0)",
      },
      to: {
        transform: "translateY(-100vh)",
      },
    },
  })
);

export const StyledAnimatedTypography = styled(Typography)<{ delay: number }>(
  ({ theme, delay }) => ({
    color: theme.palette.text.secondary,
    animation: `fadeInUp ${delay / 1000 - 2}s ease-in-out forwards`,
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translateY(100px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  })
);
