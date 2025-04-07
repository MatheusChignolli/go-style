import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MuiPhoneNumber from "mui-phone-number";
import { genders } from "../../../../constants/user";

const schema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  gender: z.string().min(1, "Gênero é obrigatório"),
  birthDate: z.custom<Dayjs>((val) => val instanceof dayjs, "Data inválida"),
  phone: z.string().min(1, "Número de celular é obrigatório"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  formId: string;
  onSubmit: () => void;
}

function Step1({ formId, onSubmit }: Props) {
  const form = useForm<FormData>({
    defaultValues: {
      birthDate: dayjs(),
      fullName: "",
      gender: "",
      phone: "",
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
          name="fullName"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Nome Completo
              </InputLabel>
              <InputBase autoFocus id={field.name} {...field} />
              {!!fieldState.error?.message && (
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Controller
          name="gender"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Gênero
              </InputLabel>
              <Select id={field.name} labelId="gender-label" {...field}>
                {genders.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
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
          name="birthDate"
          control={form.control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="pt-br"
            >
              <DatePicker
                label="Data de nascimento"
                format="DD/MM/YYYY"
                value={value}
                onChange={(event) => onChange(event)}
                slotProps={{
                  textField: { error: !!error, helperText: error?.message },
                }}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormControl
              fullWidth
              variant="standard"
              error={!!fieldState.error}
            >
              <InputLabel shrink htmlFor={field.name}>
                Celular
              </InputLabel>
              <MuiPhoneNumber
                id={field.name}
                variant="outlined"
                defaultCountry="br"
                error={!!fieldState.error}
                {...field}
              />
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

export default Step1;
