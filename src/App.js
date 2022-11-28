import { useContext } from "react";
import "./App.scss";
import Contact from "./Components/contact/Contact";
import Experience from "./Components/experience/Experience";
import Footer from "./Components/footer/Footer";
import Intro from "./Components/intro/Intro";
import Navbar from "./Components/navbar/Navbar";
import Portofolio from "./Components/portofolio/Portofolio";
import Services from "./Components/services/Services";
import Testimonials from "./Components/testimonials/Testimonials";
import Works from "./Components/works/Works";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
