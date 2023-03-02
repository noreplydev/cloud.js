import React from "react";
import Navbar from "./components/navbar/navbar.jsx";

import GlobalStyle from "./style";
import { Explore } from "./pages/explore/explore.jsx";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Explore/>
    </>
  );
}

export default App;
