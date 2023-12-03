import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import './styles/Astyles.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"          element={<Home/>}     />
        <Route path="/projects"  element={<Projects/>} />
        <Route path="/contact"   element={<Contact/>}  />
        <Route path="/skills"    element={<Skills/>}/>
      </Routes>
    </Router>
  );
}

export default App;
