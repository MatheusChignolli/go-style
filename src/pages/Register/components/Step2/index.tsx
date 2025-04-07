import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { clothesSize, jobRoles } from "../../../../constants/user";
import MaskedInput from "../../../../components/MaskedInput";

const schema = z.object({
  height: z.string().min(1, "Altura é obrigatória"),
  weight: z.string().min(1, "Peso é obrigatório"),
  clothesSize: z.string().optional(),
  jobRole: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  formId: string;
  onSubmit: () => void;
}

function Step2({ formId, onSubmit }: Props) {
  const form = useForm<FormData>({
    defaultValues: {
      height: "",
      weight: "",
      clothesSize: "",
      jobRole: "",
    },
    resolver: zodResolver(schema),
  });

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // TODO: Salvar dados no localStorage
    onSubmit();
  };

  return (
    <form id={formId} onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack mt={2} p={2} gap={4}>
        <Controller
          name="height"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Altura
              </InputLabel>
              <InputBase
                autoFocus
                id={field.name}
                type="tel"
                {...field}
                inputProps={{
                  mask: "0.00",
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
          name="weight"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Peso
              </InputLabel>
              <InputBase
                id={field.name}
                type="tel"
                endAdornment={
                  <InputAdornment position="end">KG</InputAdornment>
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
          name="clothesSize"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Manequim (tamanho das roupas)
              </InputLabel>
              <Select id={field.name} labelId="clothe-size-label" {...field}>
                {clothesSize.map(({ id, label, value }) => (
                  <MenuItem key={id} value={value}>
                    {value} ({label})
                  </MenuItem>
                ))}
              </Select>
              {!!fieldState.error?.message && (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="jobRole"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Profissão
              </InputLabel>
              <Select id={field.name} labelId="job-role-label" {...field}>
                {jobRoles.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
              {!!fieldState.error?.message && (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Stack>
    </form>
  );
}

export default Step2;
