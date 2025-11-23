import "./home.css";
import Social from "./Social.tsx";
import Data from "./Data.tsx";
import ScrollDown from "./ScrollDown.tsx";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}