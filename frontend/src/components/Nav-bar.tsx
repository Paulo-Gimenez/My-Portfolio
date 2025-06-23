import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed bg-gray-800 p-4 top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Paulo Gimenez</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white" aria-label="Ir a la página de inicio">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-white" aria-label="Ir a la página de acerca de">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-white" aria-label="Ir a la página de contacto">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
