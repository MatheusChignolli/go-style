import {
  Box,
  keyframes,
  Stack,
  Step,
  Stepper,
  styled,
  Typography,
} from "@mui/material";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StyledImage = styled(Box)<{ url: string }>(({ url }) => ({
  flex: 1,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundImage: `url(${url})`,
  "&.fade-in": {
    animation: `${fadeIn} 300ms ease-in-out forwards`,
  },
  "&.fade-out": {
    animation: `${fadeOut} 300ms ease-in-out forwards`,
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4, 3),
}));

export const StyledStepper = styled(Stepper)(({ theme }) => ({
  gap: theme.spacing(1.5),
}));

export const StyledStep = styled(Step)(() => ({
  padding: 0,
}));

export const StyledStepIcon = styled(Box)<{ disabled: boolean }>(
  ({ theme, disabled }) => ({
    width: 5,
    height: 5,
    paddingX: 5,
    borderRadius: "100%",
    opacity: disabled ? "0.3" : "1",
    backgroundColor: theme.palette.common.black,
  })
);

export const StyledTypography = styled(Typography)(() => ({
  "&.fade-in": {
    animation: `${fadeIn} 500ms ease-in-out forwards`,
  },
  "&.fade-out": {
    animation: `${fadeOut} 500ms ease-in-out forwards`,
  },
}));
