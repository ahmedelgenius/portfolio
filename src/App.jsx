import React, { useState, CSSProperties } from "react";
// import { CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Experience from "./components/Experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import "./App.css";
import { useEffect } from "react";
const override = (CSSProperties = {
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  margin: "70px auto",
  textAlign: "center",
});
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="">
      {loading ? (
        <RingLoader
          color={"#6131df"}
          cssOverride={override}
          loading={loading}
          size={200}
        />
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
