import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import Register from 'components/Register';
import Dashboard from "components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let loggedUser = 'Dawid Bączkiewicz';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Register />} />
          <Route exact path="/" element={<Dashboard loggedUser={loggedUser} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
