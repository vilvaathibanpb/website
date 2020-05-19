import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={theme}>
      <div className=" bg-main min-h-screen">
        <Header theme={theme} toggle={() => toggle()} />
        <Home theme={theme} />
      </div>
    </div>
  );
}

export default App;
