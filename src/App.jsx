import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
const App = () => {
  return (
    <>
      <div className="Container">
        <Navbar />
        <Header />
        <Services />
        <About />
      </div>
    </>
  );
};
export default App;
