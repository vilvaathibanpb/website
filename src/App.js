import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Concept from "./components/Concept";
import Stack from "./components/Stack";
import MVP from "./components/MVP";
import Circle from "./components/Circle";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={theme}>
      <div className="bg-main min-h-screen">
        <Header theme={theme} toggle={() => toggle()} />
        <Home theme={theme} />
        <div className="lg:p-10 p-4 lg:pb-0"><Concept theme={theme} /></div>
        <Stack theme={theme} />
        <div className="lg:p-10 p-4 lg:pb-0 lg:pt-0"><MVP theme={theme} /></div>
        <Circle theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;
