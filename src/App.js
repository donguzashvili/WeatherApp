import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import News from "./components/NewsComponents/News";
import Photos from "./components/PhotosComponents/Photos";
import Contact from "./components/Contact";
function App() {
  const [button, setButton] = useState("home");
  const toggle = (e) => {
    if (e.target.id === "home") {
      setButton("home");
    } else if (e.target.id === "news") {
      setButton("news");
    } else if (e.target.id === "photos") {
      setButton("photos");
    } else {
      setButton("contact");
    }
  };
  return (
    <div>
      <Header button={button} onClick={toggle} />
      <div className={button === "home" ? "displayBlock" : "displayNone"}>
        <div>
          <Home />
        </div>
      </div>
      <div className={button === "news" ? "displayBlock" : "displayNone"}>
        <News onClick={toggle} />
      </div>
      <div className={button === "photos" ? "displayBlock" : "displayNone"}>
        <Photos onClick={toggle} />
      </div>
      <div className={button === "contact" ? "displayBlock" : "displayNone"}>
        <Contact onClick={toggle} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
