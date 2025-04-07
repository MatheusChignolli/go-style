import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { z } from "zod";
import { useNavigate } from "react-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MaskedInput from "../../../../../../components/MaskedInput";
import NegativeContinueButton from "../NegativeContinueButton";
import { StyledForm } from "./styles";

interface Props {
  label: string;
}

const schema = z.object({
  bust: z.string().min(1, "A medida do busto é obrigatória"),
  waist: z.string().min(1, "A medida da cintura é obrigatória"),
  hip: z.string().min(1, "A medida do quadril é obrigatória"),
});

type FormData = z.infer<typeof schema>;

function CustomBodySize({ label }: Props) {
  const navigate = useNavigate();
  const form = useForm<FormData>({
    defaultValues: {
      bust: "",
      waist: "",
      hip: "",
    },
    resolver: zodResolver(schema),
  });

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    navigate("/");
    // TODO: Salvar dados no localStorage
  };

  return (
    <StyledForm onSubmit={form.handleSubmit(handleSubmit)}>
      <Typography
        variant="h5"
        fontWeight={400}
        textAlign="center"
        color="primary.contrastText"
        py={2}
      >
        {label}
      </Typography>
      <Stack mb="auto" gap={4}>
        <Controller
          name="bust"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel className="negative" shrink htmlFor={field.name}>
                Busto
              </InputLabel>
              <InputBase
                id={field.name}
                type="tel"
                className="negative"
                placeholder="100"
                endAdornment={
                  <InputAdornment position="end">CM</InputAdornment>
                }
                {...field}
                inputProps={{
                  mask: "000",
                  overwrite: true,
                }}
                inputComponent={MaskedInput}
              />
              {!!fieldState.error?.message && (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="waist"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel className="negative" shrink htmlFor={field.name}>
                Cintura
              </InputLabel>
              <InputBase
                id={field.name}
                type="tel"
                className="negative"
                placeholder="85"
                endAdornment={
                  <InputAdornment position="end">CM</InputAdornment>
                }
                {...field}
                inputProps={{
                  mask: "000",
                  overwrite: true,
                }}
                inputComponent={MaskedInput}
              />
              {!!fieldState.error?.message && (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="hip"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel className="negative" shrink htmlFor={field.name}>
                Quadril
              </InputLabel>
              <InputBase
                id={field.name}
                type="tel"
                className="negative"
                placeholder="130"
                endAdornment={
                  <InputAdornment position="end">CM</InputAdornment>
                }
                {...field}
                inputProps={{
                  mask: "000",
                  overwrite: true,
                }}
                inputComponent={MaskedInput}
              />
              {!!fieldState.error?.message && (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Stack>
      <Stack alignItems="center">
        <NegativeContinueButton type="submit">Continuar</NegativeContinueButton>
      </Stack>
    </StyledForm>
  );
}

export default CustomBodySize;
