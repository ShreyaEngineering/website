import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
