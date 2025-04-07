import { useCallback, useState } from "react";
import { Stack } from "@mui/material";
import Overlay from "../../components/Overlay";
import { onboardingSteps } from "../../constants/steps";
import {
  StyledStack,
  StyledStepIcon,
  StyledStep,
  StyledStepper,
  StyledTypography,
  StyledImage,
} from "./styles";
import ContinueButton from "../../components/ContinueButton";
import Frame from "../../components/Frame";
import { useNavigate } from "react-router";

function Onboarding() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { title, subtitle, image } = onboardingSteps[activeStep];

  const handleContinue = useCallback(() => {
    if (activeStep === onboardingSteps.length - 2) {
      setIsFadingOut(true);
      setTimeout(() => navigate("/"), 500);
      return;
    }

    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
      setActiveStep((prevState) => prevState + 1);
    }, 500);
  }, [activeStep, navigate]);

  return (
    <Stack height="100%" width="100%" position="relative">
      <Overlay />
      <Frame>
        {!!image && (
          <StyledImage
            url={image}
            className={isFadingOut ? "fade-out" : "fade-in"}
          />
        )}
        <StyledStack>
          <Stack flexDirection="row" justifyContent="center">
            <StyledStepper
              alternativeLabel
              activeStep={activeStep}
              connector={null}
            >
              {onboardingSteps.map(({ id }, index) => (
                <StyledStep key={id}>
                  <StyledStepIcon disabled={activeStep !== index} />
                </StyledStep>
              ))}
            </StyledStepper>
          </Stack>
          <StyledTypography
            key={title}
            align="center"
            variant="h2"
            marginTop={5}
            fontWeight={600}
            className={isFadingOut ? "fade-out" : "fade-in"}
          >
            {title}
          </StyledTypography>
          <StyledTypography
            key={subtitle}
            align="center"
            marginTop={1.5}
            marginBottom={5}
            fontWeight={400}
            className={isFadingOut ? "fade-out" : "fade-in"}
          >
            {subtitle}
          </StyledTypography>
          <ContinueButton
            color="primary"
            variant="contained"
            disabled={activeStep === onboardingSteps.length - 1}
            onClick={handleContinue}
          >
            Continue
          </ContinueButton>
        </StyledStack>
      </Frame>
    </Stack>
  );
}

export default Onboarding;
