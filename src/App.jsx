import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Experience from "./components/Experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import HashLoader from "react-spinners/HashLoader";
import CSSProperties from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    //6131df
    <div>
      {loading ? (
        <div className="App">
          <HashLoader color={"#cc68e0"} loading={loading} size={200} />
        </div>
      ) : (
        <div className="container">
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
