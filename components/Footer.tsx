import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Linkedin, Twitter, Github, Building2, Briefcase, Facebook, Instagram, Package } from 'lucide-react';

export const Footer = () => {
  const currentYear = 2025;

  const majorCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Noida',
    'Gurgaon', 'Indore', 'Bhopal', 'Nagpur', 'Kochi', 'Coimbatore'
  ];

  return (
    <footer className="dark:bg-dark-800 light:bg-gray-50 border-t dark:border-dark-700 light:border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">DEV SEC IT</h3>
            <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4">
              India's Top IT & Software Development Company. Custom software development, AI solutions, cybersecurity, and professional IT training across all major Indian cities.
            </p>
            <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4">
              Top Job Provider | Best CTC up to 36 LPA | 500+ Projects Delivered
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href="https://in.linkedin.com/company/devsecit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full dark:bg-dark-700 light:bg-gray-200 flex items-center justify-center dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/devsecitltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full dark:bg-dark-700 light:bg-gray-200 flex items-center justify-center dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://github.com/dev-sec-it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full dark:bg-dark-700 light:bg-gray-200 flex items-center justify-center dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/devsecit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full dark:bg-dark-700 light:bg-gray-200 flex items-center justify-center dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/devsecit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full dark:bg-dark-700 light:bg-gray-200 flex items-center justify-center dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://pub.dev/packages/hello_devsecit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full dark:bg-dark-700 light:bg-gray-200 flex items-center justify-center dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition" aria-label="Pub.dev">
                <Package className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary-400" />
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/services" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Services</Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">AI Solutions</Link>
              </li>
              <li>
                <Link href="/portfolio" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Portfolio</Link>
              </li>
              <li>
                <Link href="/investors" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Investors</Link>
              </li>
              <li>
                <Link href="/pricing" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Careers & Training */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary-400" />
              Careers & Training
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/careers" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Open Positions</Link>
              </li>
              <li>
                <Link href="/careers#benefits" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Benefits (up to 36 LPA)</Link>
              </li>
              <li>
                <Link href="/courses" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">IT Courses</Link>
              </li>
              <li>
                <Link href="/courses#certification" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Certifications</Link>
              </li>
              <li>
                <Link href="/#faq" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-400" />
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a href="tel:+918101979855" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">+91 8101 979855</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <a href="https://wa.me/918101979855" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:sales@devsecit.com" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">sales@devsecit.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1" />
                <span className="dark:text-gray-400 light:text-gray-600">West Bengal, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cities Section */}
        <div className="border-t dark:border-dark-700 light:border-gray-200 pt-8 mb-8">
          <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary-400" />
            Serving All Major Indian Cities
          </h4>
          <div className="flex flex-wrap gap-2">
            {majorCities.map((city, i) => (
              <Link
                key={i}
                href={`/cities/${city.toLowerCase()}`}
                className="px-3 py-1 text-xs dark:bg-dark-700 light:bg-gray-200 rounded-full dark:text-gray-400 light:text-gray-600 hover:text-primary-400 hover:bg-primary-500/10 transition"
              >
                {city}
              </Link>
            ))}
            <span className="px-3 py-1 text-xs dark:text-gray-500 light:text-gray-500">+ 100 more cities</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-dark-700 light:border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="dark:text-gray-400 light:text-gray-600 text-sm">
            © {currentYear} DEV SEC IT. All rights reserved. | Top IT Company in India
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
