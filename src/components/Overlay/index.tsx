import { useEffect } from "react";
import { StyledAnimatedTypography, StyledOverlay } from "./styles";
import { useTheme } from "@mui/material";

function Overlay({ delay = 4000 }) {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", theme.palette.common.black);
    }

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
      if (metaTag) {
        metaTag.setAttribute("content", theme.palette.background.default);
      }
    }, delay - 150);

    return () => clearTimeout(timer);
  }, [theme, delay]);

  return (
    <StyledOverlay delay={delay}>
      <StyledAnimatedTypography variant="h1" delay={delay}>
        GoStyle
      </StyledAnimatedTypography>
    </StyledOverlay>
  );
}

export default Overlay;
