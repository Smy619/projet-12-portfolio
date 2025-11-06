// src/pages/Home.jsx

import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import SkillsAndResume from "../components/SkillsAndResume";
import Studio from "../components/Studio";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <SkillsAndResume />
      <Studio />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
