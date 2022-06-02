import { useState } from "react";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import Login from "components/Login/Login";
import Dashboard from "components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from 'components/UserProfile/UserProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            exact
            path="/"
            element={<Dashboard isAuthenticated={isAuthenticated} />}
          />
          <Route path={`/profile/:userId`} element={<UserProfile isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
