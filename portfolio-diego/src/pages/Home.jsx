import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Skills from "../components/Skills";
import FeaturedProject from "../components/FeaturedProject";
import Projects from "../components/Projects";
import WhyMe from "../components/WhyMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <FeaturedProject />
        <Projects />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;