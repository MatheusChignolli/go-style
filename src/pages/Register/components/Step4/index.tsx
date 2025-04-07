import { Grid2, Stack, Typography } from "@mui/material";
import { ClotheStyleOption } from "../../../../types/clothes";
import {
  StyledBorder,
  StyledGrid,
  StyledOption,
  StyledOverlay,
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  title?: string;
  subtitle?: string;
  options: ClotheStyleOption[];
  clotheStyles: ClotheStyleOption[];
  setStyleOption: (styleOption: ClotheStyleOption) => void;
}

function Step4({
  title,
  subtitle,
  options,
  clotheStyles,
  setStyleOption,
}: Props) {
  return (
    <Stack height="100%" alignItems="center">
      {!!title && (
        <Typography
          fontWeight={600}
          variant="h6"
          textAlign="center"
          fontFamily="Urbanist"
        >
          {title}
        </Typography>
      )}
      {!!subtitle && (
        <Typography
          maxWidth={250}
          fontWeight={300}
          lineHeight="18px"
          textAlign="center"
          variant="caption"
          fontFamily="Urbanist"
        >
          {subtitle}
        </Typography>
      )}
      <Stack
        px={3}
        py={1}
        width="100%"
        height="100%"
        overflow="auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <Grid2 container spacing={2} columns={2}>
          {options.map((option) => {
            const { id } = option;
            const isSelected = clotheStyles.some(
              (clotheStyle) => clotheStyle.id === id
            );

            return (
              <StyledGrid
                key={id}
                size={1}
                onClick={() => setStyleOption(option)}
              >
                <StyledOption width="100%" height="100%" borderRadius={1}>
                  <Stack height="100%" width="100%" position="absolute">
                    <StyledBorder selected={isSelected} />
                  </Stack>
                  <StyledOverlay
                    justifyContent="center"
                    alignItems="center"
                    selected={isSelected}
                  >
                    <FavoriteBorderIcon
                      sx={{
                        color: (theme) => theme.palette.common.white,
                        fontSize: 36,
                      }}
                    />
                  </StyledOverlay>
                </StyledOption>
              </StyledGrid>
            );
          })}
        </Grid2>
      </Stack>
    </Stack>
  );
}

export default Step4;
