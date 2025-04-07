import { Box, Stack, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import AddIcon from "@mui/icons-material/Add";

function TakePhoto() {
  return (
    <Stack
      mx={2}
      p={2}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      borderRadius={2}
      sx={{
        cursor: "pointer",
        backgroundColor: "#6C6AEA",
      }}
    >
      <Typography
        fontSize={15}
        maxWidth={230}
        fontWeight={400}
        align="center"
        color="primary.contrastText"
      >
        <Stack flexDirection="row" alignItems="center" justifyContent="center">
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: "1000px",
              color: "#5856D6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: (theme) => theme.palette.background.default,
              marginRight: -0.25,
            }}
          >
            <CameraAltOutlinedIcon fontSize="small" color="inherit" />
          </Box>
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: "1000px",
              color: (theme) => theme.palette.primary.contrastText,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#5856D6",
              marginLeft: -0.25,
            }}
          >
            <AddIcon color="inherit" />
          </Box>
        </Stack>
        Adicione suas peças e deixe a IA criar looks perfeitos para você!
      </Typography>
    </Stack>
  );
}

export default TakePhoto;
