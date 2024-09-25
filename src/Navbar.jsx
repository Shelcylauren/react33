import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav >
      <ul className="flex justify-end space-x-4 mt-4">
        <li>
          <Link to="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="text-gray-800 hover:text-blue-500">
            Product
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-gray-800 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/Services" className="text-gray-800 hover:text-blue-500">
            Services
          </Link>
        </li>
        
        <li>
          <Link to="/Contact " className="text-gray-800 hover:text-blue-500">
            Contact 
          </Link>
        </li>
        <li>
          <Link to="/Login" className="text-gray-800 hover:text-blue-500">
            Login
          </Link>
        </li>
        <li>
          <Link to="/Register" className="text-gray-800 hover:text-blue-500">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
