import BaseContainer from "./components/BaseContainer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BaseContainer>
          <Header />
          <Main />
        </BaseContainer>
      </div>
    </>
  );
}

export default App;
