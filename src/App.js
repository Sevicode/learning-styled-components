import { Button } from "./components/Styles/Button.styles";
import { Global } from "./components/Styles/Global.styles";
import { Container } from "./components/Styles/Container.styles";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Header />
        <Container>
          <Button lightTheme lightColor>
            Light Theme
          </Button>
          <Button>Dark Theme</Button>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
