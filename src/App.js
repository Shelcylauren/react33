import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Navbar';
import logo from './image/logo.png'; // Assurez-vous que le chemin est correct
import backgroundImg from './image/b.jpg'; // Image de fond


function App() {
  return (
    <div className="relative min-h-screen flex">
      {/* Image d'arrière-plan réduite sur le côté droit */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center" // Reduce the width to 1/3
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }} // 'contain' ensures image fits within its bounds
      ></div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col p-8 relative">
        <img src={logo} alt="Your Logo" className="absolute top-3 left-4 w-16 h-auto z-1" /> {/* Reduced the logo size */}
        <Navbar />
        <div className="flex flex-col space-y-8 mt-16">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
