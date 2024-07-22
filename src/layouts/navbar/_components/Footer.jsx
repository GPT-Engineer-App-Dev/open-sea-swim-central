import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Open Sea Swimming</h3>
          <p className="text-sm text-gray-600">Explore the beauty of open water swimming</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm">
            {["Home", "About", "Events", "Gallery", "Contact"].map((item) => (
              <li key={item} className="mb-1">
                <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900">
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Open Sea Swimming. All rights reserved.
      </div>
    </div>
  </footer>
);