import About from "./components/about/About";
import BackgroundParticles, {
  CarpetTexture,
} from "./components/BackgroundParticles";
import Contact from "./components/contact/Contact";
import CursorBlob from "./components/CursorBlob";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
// import StormOverlay from "./components/StormOverlay";

export default function App() {
  return (
    <>
      <CarpetTexture />
      {/* <StormOverlay /> */}
      <CursorBlob />
      <BackgroundParticles />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
