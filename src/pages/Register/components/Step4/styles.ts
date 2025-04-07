import { Grid2, Stack, styled } from "@mui/material";

// const fadeInOverlay = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const fadeOutOverlay = keyframes`
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//   }
// `;

export const StyledGrid = styled(Grid2)(() => ({
  position: "relative",
  height: 436,
  borderRadius: 6,
  boxShadow: "0px 4px 8px -1px #0000001A",
  "&:hover": {
    cursor: "pointer",
  },
}));

export const StyledOption = styled(Stack)(() => ({
  backgroundColor: "gray",
  position: "relative",
  borderRadius: "13px",
}));

export const StyledBorder = styled(Stack)<{ selected: boolean }>(
  ({ selected }) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    border: "10px solid white",
    opacity: selected ? 0 : 1,
    // animation: selected
    //   ? `${fadeOutOverlay} 0.5s ease`
    //   : `${fadeInOverlay} 0.5s ease`,

    "::after": {
      content: "''",
      width: "calc(100% + 20px)",
      height: "calc(100% + 20px)",
      border: "10px solid white",
      position: "absolute",
      top: "-10px",
      left: "-10px",
      right: "-10px",
      bottom: "-10px",
      borderRadius: "12px",
      opacity: selected ? 0 : 1,
      // animation: selected
      //   ? `${fadeOutOverlay} 0.5s ease`
      //   : `${fadeInOverlay} 0.5s ease`,
      zIndex: -1,
    },
  })
);

export const StyledOverlay = styled(Stack)<{ selected: boolean }>(
  ({ selected }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    opacity: selected ? 1 : 0,
    // animation: selected
    //   ? `${fadeInOverlay} 0.5s ease`
    //   : `${fadeOutOverlay} 0.5s ease`,
  })
);
