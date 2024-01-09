import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Projects from "./components/pages/Projects";
import Technologies from "./components/pages/Technologies";
import About from "./components/pages/About";

import './index.css'
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Skills from "./pages/Skills";


function App() {
  return (
    <Router>
      <Header />
      
      
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
