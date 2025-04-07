import { PropsWithChildren } from "react";
import { StyledFrame } from "./styles";

function Frame({ children }: PropsWithChildren) {
  return (
    <StyledFrame disableGutters maxWidth="xs">
      {children}
    </StyledFrame>
  );
}

export default Frame;
