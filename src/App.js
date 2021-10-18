import React from "react";

import Header from "./components/layout/Header";
import Home from "./components/Home";

import { GlobalStyles } from './GlobalStyles';

function App(){
  return(
    <div>
      <Header />
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App