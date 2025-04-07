import { Route, Routes } from "react-router";
import { Stack, ThemeProvider } from "@mui/material";
import dayjs from "dayjs";
import { theme } from "./constants/theme";
import React, { Suspense } from "react";

dayjs.locale("pt-br");

const Onboarding = React.lazy(() => import("./pages/Onboarding"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <Stack
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            Carregando...
          </Stack>
        }
      >
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
