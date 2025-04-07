import { useState } from "react";
import { useNavigate } from "react-router";
import { IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Frame from "../../components/Frame";
import ContinueButton from "../../components/ContinueButton";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import {
  accessoriesOptions,
  diaryLooks,
  footwearOptions,
  jobLooks,
  outfitsOptions,
  randomLooks,
  skirtPantShortsOptions,
} from "../../constants/clothes";
import { ClotheStyleOption } from "../../types/clothes";
import Step5 from "./components/Step5";

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [clotheStyles, setClotheStyles] = useState<ClotheStyleOption[]>([]);
  const nextStep = () => setStep((prevState) => prevState + 1);
  const prevStep = () =>
    setStep((prevState) => (prevState <= 0 ? 0 : prevState - 1));

  const setStyleOption = (option: ClotheStyleOption) => {
    setClotheStyles((prevState) => {
      const updatedStyles = new Set(prevState);

      if (updatedStyles.has(option)) {
        updatedStyles.delete(option);
      } else {
        updatedStyles.add(option);
      }

      return [...updatedStyles];
    });
  };

  const steps = [
    {
      isProgress: true,
      onBack: () => {
        navigate(-1);
      },
      onNext: () => {},
      buttonProps: {
        type: "submit" as const,
        form: "first-step-form",
        children: "Próximo",
      },
      pageTitle: undefined,
      content: <Step1 formId="first-step-form" onSubmit={nextStep} />,
    },
    {
      isProgress: true,
      onBack: prevStep,
      buttonProps: {
        type: "submit" as const,
        form: "second-step-form",
        children: "Próximo",
      },
      pageTitle: undefined,
      content: <Step2 formId="second-step-form" onSubmit={nextStep} />,
    },
    {
      isProgress: true,
      onBack: prevStep,
      buttonProps: {
        onClick: nextStep,
        children: "Escolher peças",
      },
      pageTitle: undefined,
      content: <Step3 />,
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Estilos",
      content: (
        <Step4
          title="QUAL É O SEU ESTILO NO TRABALHO?"
          subtitle="Escolha as imagens que representam seu estilo no ambiente profissional."
          options={jobLooks}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Estilos",
      content: (
        <Step4
          title="QUAL É O SEU ESTILO NO DIA A DIA?"
          subtitle="Escolha as imagens que combinam com seu estilo no dia a dia."
          options={diaryLooks}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Estilos",
      content: (
        <Step4
          subtitle="Selecione as peças que você mais gosta dentro dos estilos escolhidos."
          options={randomLooks}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Saias, calças, shorts.",
      content: (
        <Step4
          subtitle="Selecione as peças que você mais gosta dentro dos estilos escolhidos."
          options={skirtPantShortsOptions}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Tênis, botas, sapatos de salto.",
      content: (
        <Step4
          subtitle="Selecione as peças que você mais gosta dentro dos estilos escolhidos."
          options={footwearOptions}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Vestidos, macacões e conjuntos.",
      content: (
        <Step4
          subtitle="Selecione as peças que você mais gosta dentro dos estilos escolhidos."
          options={outfitsOptions}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: {
        children: "Próximo",
        onClick: nextStep,
      },
      pageTitle: "Bolsas, cintos, óculos.",
      content: (
        <Step4
          subtitle="Selecione as peças que você mais gosta dentro dos estilos escolhidos."
          options={accessoriesOptions}
          clotheStyles={clotheStyles}
          setStyleOption={setStyleOption}
        />
      ),
    },
    {
      isProgress: false,
      onBack: prevStep,
      buttonProps: undefined,
      pageTitle: "Descubra seu tipo de corpo",
      content: <Step5 />,
    },
  ];

  const { isProgress, onBack, content, buttonProps, pageTitle } = steps[step];
  const stepsLength = 6;
  const progress = ((step + 1) / stepsLength) * 100;

  return (
    <Frame>
      <Stack
        px={3}
        pt={3}
        pb={1}
        direction="row"
        alignItems="center"
        position="relative"
        justifyContent="space-between"
      >
        <IconButton onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        {isProgress && (
          <>
            <LinearProgress
              sx={{ width: "60%" }}
              variant="determinate"
              value={progress}
            />
            <Typography
              variant="h4"
              fontFamily="Urbanist"
              color="text.tertiary"
              fontWeight={600}
            >
              {step + 1} /{stepsLength}
            </Typography>
          </>
        )}
        {!!pageTitle && (
          <Typography
            fontFamily="Urbanist"
            fontWeight={600}
            position="absolute"
            variant="h5"
            width="calc(100% - 48px)"
            textAlign="center"
            zIndex={-1}
          >
            {pageTitle}
          </Typography>
        )}
      </Stack>
      <Stack height={`calc(100dvh - 72px ${buttonProps ? "- 82px" : ""})`}>
        {content}
      </Stack>
      {!!buttonProps && (
        <Stack p={3} pt={1}>
          <ContinueButton variant="contained" {...buttonProps} />
        </Stack>
      )}
    </Frame>
  );
}

export default Register;
