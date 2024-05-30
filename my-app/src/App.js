import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";

function App() {
  let [mode, Setmode] = useState("dark"); // wheather dark mode enable or not dafault value false
  const toggleMode = () => {
    if (mode === "light") {
      Setmode = "dark";
    } else {
      Setmode = "light";
    }
  };
  return (
    <>
      <Navbar
        title="Textutils"
        abouttxt="about us"
        mode="darkMode"
        toggleMode={toggleMode}
      />
      {/* <Navbar/> */}
      <div className="container my-3">
        {/* <Textform heading="Enter your text to analyze below"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
