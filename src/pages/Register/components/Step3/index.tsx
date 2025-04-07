import { Stack, Typography } from "@mui/material";

function Step3() {
  return (
    <Stack mt={2} p={3} height="100%" justifyContent="center" gap={1}>
      <Typography
        color="text.tertiary"
        variant="h1"
        fontSize={38}
        fontWeight={600}
      >
        QUAL ESTILO TE REPRESENTA?
      </Typography>
      <Typography color="text.tertiary" variant="h5" fontFamily="Urbanist">
        Selecione os estilos que representam você no trabalho e no dia a dia.
        Não se preocupe, isso pode ser ajustado depois!
      </Typography>
    </Stack>
  );
}

export default Step3;
