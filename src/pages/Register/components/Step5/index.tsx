import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Stack, Typography } from "@mui/material";
import { bodyTypes } from "../../../../constants/user";
import CustomBodySize from "./components/CustomBodySize";
import NegativeContinueButton from "./components/NegativeContinueButton";
import { StyledBodyTypeCard, StyledBodyTypeCardSelection } from "./styles";

function Step5() {
  const navigate = useNavigate();
  const [selectedBodyType, setSelectedBodyType] = useState<string>();

  const handleSelectBodyType = (id: string) => {
    setSelectedBodyType((prevState) => {
      if (id === prevState) {
        return undefined;
      }

      return id;
    });
  };

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <Stack
      flex={1}
      px={3}
      py={4}
      gap={4}
      flexDirection="row"
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
      }}
    >
      {bodyTypes.map(({ id, image, label, custom }) => {
        const selected = selectedBodyType === id;
        return (
          <Stack position="relative" width="100%" height="100%" key={id}>
            <StyledBodyTypeCard
              selected={selected}
              onClick={() => handleSelectBodyType(id)}
            >
              <Box
                flex={1}
                borderRadius={1}
                sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#f2f2f2",
                  backgroundPosition: "center",
                  backgroundSize: "90%",
                  backgroundImage: `url(${image})`,
                }}
              />
              <Typography
                variant="h6"
                fontWeight={400}
                textAlign="center"
                p={2.5}
              >
                {label}
              </Typography>
            </StyledBodyTypeCard>
            <StyledBodyTypeCardSelection selected={selected} custom={custom}>
              {custom ? (
                <CustomBodySize label={label} />
              ) : (
                <>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    textAlign="center"
                    color="primary.contrastText"
                    pb={1.5}
                  >
                    {label}
                  </Typography>
                  <NegativeContinueButton onClick={handleContinue}>
                    Esse é o meu tipo!
                  </NegativeContinueButton>
                </>
              )}
            </StyledBodyTypeCardSelection>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Step5;
