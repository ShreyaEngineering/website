import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import Invoice from "./components/Invoice";

import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Stats />
      <Contact />
    </>
  );
}

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <BackgroundEffects />

      <Navbar />

      <ScrollToHash />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/invoice"
            element={
              <ProtectedRoute>
                <Invoice />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;