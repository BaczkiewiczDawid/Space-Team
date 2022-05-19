import Navigation from "components/Navigation";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import Register from 'components/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Register />
    </ThemeProvider>
  );
}

export default App;
