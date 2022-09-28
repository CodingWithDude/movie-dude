import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/Styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
