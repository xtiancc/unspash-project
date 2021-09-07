import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header setSearch={setSearch} />
      <Content search={search} />
      <Footer />
    </>
  );
}

export default App;
