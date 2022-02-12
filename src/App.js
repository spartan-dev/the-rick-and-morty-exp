import React from "react";
import { Layout, SectionCards } from "./components";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  //investoigar que es un componente de alto estado
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {" "}
        {/* esto es un wrap  */}
        <main>
          <SectionCards />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
