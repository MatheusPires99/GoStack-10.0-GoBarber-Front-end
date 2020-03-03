import React from "react";
import { Router } from "react-router-dom";

import "./config/ReactotronConfig";

import Routes from "./routes";
import hisotry from "./services/history";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Router history={hisotry}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
