import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
