import { ButtonProps } from "@mui/material";
import ContinueButton from "../../../../../../components/ContinueButton";
import { theme } from "../../../../../../constants/theme";

function NegativeContinueButton(props: ButtonProps) {
  return (
    <ContinueButton
      color="primary"
      variant="contained"
      sx={{
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        textTransform: "inherit",
        ...props.sx,
      }}
      {...props}
    />
  );
}

export default NegativeContinueButton;
