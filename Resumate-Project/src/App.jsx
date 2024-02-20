import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Layout/Home';
import Navbar from './components/Layout/Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Layout/Footer';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Resume from './components/Resume/Resume';
import Project from './components/Resume/Section/Project';
import Feature from './components/feature';


function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume/project" element={<Project />} />
          <Route path="/featurepath" element={<Feature />} />
        </Routes>
        <Footer/>
      </Router>
    
  )
}
export default App
