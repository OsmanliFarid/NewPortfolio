import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
const App = () => {
  return (
    <>
      <div className="max-w-[95vw] m-[auto] sm:max-w-[95vw] md:max-w-[82vw]">
        <Navbar />
        <Header />
        <Services />
        <About />
      </div>
    </>
  );
};
export default App;
