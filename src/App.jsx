import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <div className="max-w-[95vw] m-[auto] sm:max-w-[95vw] md:max-w-[88vw]">
        <Navbar />
        <Header />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};
export default App;
