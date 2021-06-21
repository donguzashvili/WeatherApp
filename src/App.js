import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import { navigate, setBasepath } from "hookrouter";

setBasepath("/WeatherApp");

function App() {
  const [button, setButton] = useState("home");
  const toggle = (e) => {
    console.log(e.target);
    if (e.target.id === "home") {
      setButton("home");
      navigate("/");
    } else if (e.target.id === "news") {
      setButton("news");
      navigate("/news");
    } else if (e.target.id === "photos") {
      setButton("photos");
      navigate("/photos");
    } else if (e.target.id === "contact") {
      setButton("contact");
      navigate("/contact");
    }
  };

  return (
    <div>
      <Header button={button} onClick={toggle} />
      <MainComponent button={button} />
      <Footer />
    </div>
  );
}

export default App;
