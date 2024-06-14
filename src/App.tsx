import { ThemeProvider } from "styled-components";
import BaseContainer from "./components/BaseContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Progress from "./components/Progress";
import GlobalFont from "./styles/GlobalFont";
import GlobalStyle from "./styles/GlobalStyle";
import ToggleButton from "./components/Common/ToggleButton";
import useHandleTheme from "./hooks/useTheme";

function App() {
  const { theme, handleTheme } = useHandleTheme();

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
