import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Markets from './Markets';
import Calculator from './pages/Calculator';
import Education from './pages/Education';
import Careers from './Careers';
import ScrollToTop from './ScrollToTop';
import Contacts from './Contacts';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;