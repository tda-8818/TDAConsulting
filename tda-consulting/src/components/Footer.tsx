import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center">
              <img
                src="/TDAlogo.png"
                alt="TDA Consulting"
                className="h-10 w-auto"
              />
            </NavLink>
            <p className="text-sm text-muted-foreground">
              Empowering Australian businesses with cutting-edge AI automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">AI Strategy</li>
              <li className="text-sm text-muted-foreground">Machine Learning</li>
              <li className="text-sm text-muted-foreground">Data Analytics</li>
              <li className="text-sm text-muted-foreground">Process Automation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@tdaconsulting.services</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+61 414 810 390</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TDA Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
