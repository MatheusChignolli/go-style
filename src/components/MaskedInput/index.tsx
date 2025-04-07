import { forwardRef, Ref } from "react";
import { IMaskInput, ReactElementProps } from "react-imask";

const MaskedInput = forwardRef<
  HTMLDivElement,
  ReactElementProps<HTMLInputElement>
>((props, ref) => (
  <IMaskInput {...props} inputRef={ref as Ref<HTMLInputElement>} />
));

MaskedInput.displayName = "MaskedInput";

export default MaskedInput;
