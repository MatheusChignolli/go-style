import { useEffect } from "react";
import Frame from "../../components/Frame";
import { Stack, Typography, useTheme } from "@mui/material";
import {
  StyledAnimatedTypography,
  StyledCtaTypography,
  StyledDivider,
  StyledIcon,
  StyledLoginButton,
  StyledLoginOptions,
  StyledStack,
} from "./styles";
import { loginOptions } from "../../constants/login";
import { Link } from "react-router";

function Login() {
  const theme = useTheme();

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", theme.palette.common.black);
    }

    return () => {
      if (metaTag) {
        metaTag.setAttribute("content", theme.palette.background.default);
      }
    };
  }, [theme.palette]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2500);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <Frame>
      <StyledStack>
        <StyledAnimatedTypography variant="h1">
          GoStyle
        </StyledAnimatedTypography>
        <StyledLoginOptions>
          <StyledDivider />
          <Typography align="center" variant="h2" fontWeight={600}>
            Vamos começar
          </Typography>
          <Typography align="center" marginTop={1.5} fontWeight={400}>
            Faça login na sua conta abaixo ou inscreva-se para uma experiência
            incrível
          </Typography>
          <Stack
            flexDirection="column"
            alignItems="center"
            marginTop={3}
            gap={1.5}
          >
            {loginOptions.map(({ id, icon, title, alt }) => (
              <Link to="/register" key={id}>
                <StyledLoginButton variant="contained" color="inherit" key={id}>
                  <StyledIcon alt={alt} src={icon} />
                  {title}
                </StyledLoginButton>
              </Link>
            ))}
          </Stack>
          <StyledCtaTypography variant="body1" marginTop={3}>
            Junte-se a nós, é grátis
          </StyledCtaTypography>
          <Link to="/">
            <StyledCtaTypography variant="body1" marginTop={2.5}>
              Esqueceu a senha?
            </StyledCtaTypography>
          </Link>
        </StyledLoginOptions>
      </StyledStack>
    </Frame>
  );
}

export default Login;
