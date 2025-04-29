
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X,
  User
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-morocco-blue font-bold text-xl">Moroccan Real Estate Rise</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/projects" className="text-gray-700 hover:text-morocco-blue px-3 py-2 rounded-md font-medium">
              Projects
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-morocco-blue px-3 py-2 rounded-md font-medium">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-morocco-blue px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <div className="ml-4 flex items-center md:ml-6">
              <Button asChild variant="secondary" className="bg-morocco-gold text-white hover:bg-morocco-terracotta">
                <Link to="/login">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-morocco-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/projects"
              className="text-gray-700 hover:text-morocco-blue block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-morocco-blue block px-3 py-2 rounded-md text-base font-medium"
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-morocco-blue block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="bg-morocco-gold text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
