import React, { useState } from "react";
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import Experience from "./components/Experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import { useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
// const override = (CSSProperties = {
// display: "flex",
// justifyContent: "center",
// alignItems: "center",
// margin: "70px auto",
// textAlign: "center",
// });
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <PacmanLoader color={"#6131df"} loading={loading} size={110} />
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
