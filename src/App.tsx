import BaseContainer from "./components/BaseContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Progress from "./components/Progress";
import GlobalFont from "./styles/GlobalFont";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
