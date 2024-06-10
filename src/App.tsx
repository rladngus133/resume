import { ThemeProvider } from "styled-components";
import BaseContainer from "./components/BaseContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Progress from "./components/Progress";
import GlobalFont from "./styles/GlobalFont";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";
import { dark, light } from "./styles/theme";
import ToggleButton from "./components/Common/ToggleButton";

function App() {
  const [theme, setTheme] = useState(light);
  function handleTheme() {
    setTheme(theme === light ? dark : light);
  }

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <div className="App">
        <Progress />
        <BaseContainer>
          <Header />
          <Main />
          <Footer />
        </BaseContainer>
      </div>
      <ToggleButton handleTheme={handleTheme} />
    </ThemeProvider>
  );
}

export default App;
