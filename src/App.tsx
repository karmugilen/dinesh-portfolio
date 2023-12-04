import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './index.css'
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";


function App() {
  return (
    <Router>
      <Header />
      <Hero />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes> */}
    </Router>
  );
}

export default App;
