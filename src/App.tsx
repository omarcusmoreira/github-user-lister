import React from "react";
import { GlobalStyle } from "./global";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  );
}

export default App;
