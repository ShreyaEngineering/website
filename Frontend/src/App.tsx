import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Stats from "./components/pages/Stats";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import Invoice from "./components/pages/Invoice";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import IntroScreen from "./components/IntroScreen";

function AuthGate({ children }: { children: ReactNode }) {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f0f0f]">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-2 border-amber-400/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400 animate-spin" />
        </div>
        <p className="mt-5 mono text-xs tracking-widest text-amber-400/70 uppercase animate-pulse">
          Verifying access…
        </p>
      </div>
    );
  }

  return <>{children}</>;
}

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

  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <IntroScreen
        onFinish={() => setEntered(true)}
      />
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <BackgroundEffects />
      <AuthGate>
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
      </AuthGate>
    </div>
  );
};

export default App;