
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/login';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  )
}
export default App
