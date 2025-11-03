import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import CV from "./pages/CV";

import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import ScrollTop from "./components/ScrollTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <HashRouter>
      <Preloader />
      <Header />
       <ScrollTop />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/studio-Details" element={<UnderConstruction />} />
          <Route
            path="/portfolio-details/:id"
            element={<UnderConstruction />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
     </HashRouter>
  );
}

export default App;
