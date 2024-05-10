import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Buttons from "./components/Buttons";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { blue, lime, orange } from "@mui/material/colors";
import Question from "./components/Question";
import TwoButton from "./components/TwoButton";
import Yes from "./components/Yes";

function App() {
  const [option, setOption] = useState();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
        light: blue[400],
        dark: blue[900],
      },
      secondary: orange,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Question />
      <TwoButton text="Yes" setOption={setOption} />
      <Buttons />
      {/* <Buttons /> */}
    </ThemeProvider>
  );
}

export default App;
