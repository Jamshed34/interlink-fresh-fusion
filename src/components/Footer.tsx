import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">INTERLINK VENTURES LTD</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in fresh produce wholesale, imports, and supply chain management across the UK.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>24 Shepherd Cross Street<br />Bolton BL13BS, UK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Services
              </Link>
              <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Products
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Wholesale Fresh Produce</li>
              <li>Import & Export</li>
              <li>Supply Chain Management</li>
              <li>Prepared Fruit & Vegetables</li>
              <li>Food Industry Supply</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>07734717334</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@interlinkventures.co.uk</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={16} className="mt-0.5" />
                <div>
                  <p>Monday - Friday: 6:00 AM - 6:00 PM</p>
                  <p>Saturday: 6:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Interlink Ventures Ltd. All rights reserved. | Wholesale Produce Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;