
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Footer';
import About from './components/about/About';

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
        </Routes>
        <Footer/>
      </Router>
    
  )
}
export default App
