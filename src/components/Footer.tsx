
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-morocco-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Moroccan Real Estate Rise</h3>
            <p className="text-sm text-gray-300">
              The premier real estate crowdfunding platform in Morocco, connecting investors with high-quality property investment opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-300 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-300 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-gray-300 hover:text-white">
                  For Investors
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-sm text-gray-300 hover:text-white">
                  For Developers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/regulatory" className="text-sm text-gray-300 hover:text-white">
                  Regulatory Information
                </Link>
              </li>
              <li>
                <Link to="/risk-disclosure" className="text-sm text-gray-300 hover:text-white">
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-8">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Moroccan Real Estate Rise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
