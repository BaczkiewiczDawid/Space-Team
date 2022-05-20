import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import Register from 'components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
