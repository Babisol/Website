import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import CursorBlob from "./components/CursorBlob";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
// import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

export default function App() {
  return (
    <>
      <CursorBlob />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
