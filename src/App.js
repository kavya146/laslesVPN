import "./App.css";
import About from "./components/about/About";
import Container from "./components/container/Container";
import Feature from "./components/features/Features";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <About />
      <Feature />
      <Pricing />
    </div>
  );
}

export default App;
