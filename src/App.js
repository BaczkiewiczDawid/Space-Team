import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { lightTheme, darkTheme } from "assets/styles/theme";
import Login from "components/Login/Login";
import Dashboard from "components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "components/UserProfile/UserProfile";
import Settings from "components/Settings/Settings";
import FriendsList from "components/FriendsList/FriendsList";
import Chat from "components/Chat/Chat";
import { useDarkMode } from "hooks/useDarkMode";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (isAuthenticated !== "") {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    const data = localStorage.getItem("isAuthenticated");
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route exact path="/" element={<Dashboard theme={theme} />} />
          <Route path={`/profile/:userId`} element={<UserProfile />} />
          <Route path={"/settings"} element={<Settings theme={theme} toggleTheme={themeToggler} />} />
          <Route path={"/friends"} element={<FriendsList />} />
          <Route path={"/chat"} element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
