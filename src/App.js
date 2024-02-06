import "./App.css";
import About from "./components/about/About";
import MainContainer from "./components/container/MainContainer";
import Feature from "./components/features/Features";
import GlobalNetwork from "./components/global-network/Globalnetwork";
import Header from "./components/header/Header";
import Help from "./components/help/Help";
import Pricing from "./components/pricing/Pricing";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <About />
      <Feature />
      <Pricing />
      <GlobalNetwork />
      <Testimonial />
      <Help />
    </div>
  );
}

export default App;
