import { Stack, Typography } from "@mui/material";
import { StyledImage, StyledImageBox } from "./styles";

interface Props {
  image: string;
  width: number;
  height: number;
  label?: string;
}

function ImageCard({ label, height, width, image }: Props) {
  return (
    <Stack p={0.75}>
      <StyledImageBox height={height} width={width}>
        <StyledImage src={image} />
      </StyledImageBox>
      {!!label && (
        <Typography
          noWrap
          maxWidth={width}
          mt={0.5}
          fontSize={13}
          fontWeight={400}
          color="rgba(0, 0, 0, 0.5)"
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
}

export default ImageCard;
