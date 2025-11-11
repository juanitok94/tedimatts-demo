// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">TediMatts</h3>
            <p className="mb-2 text-sm">Family-Owned & Operated</p>
            <p className="mb-4 text-sm">Serving NYC Since 1997</p>
            <div className="space-y-2 text-sm">
              <p><strong>📞 Phone:</strong> <a href="tel:+1234567890" className="hover:text-blue-400">(123) 456-7890</a></p>
              <p><strong>✉️ Email:</strong> <a href="mailto:info@tedimatts.com" className="hover:text-blue-400">info@tedimatts.com</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/why-tedimatts" className="hover:text-blue-400">Why TediMatts</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Awards & Service Areas */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Recognition</h3>
            <div className="bg-blue-900/30 p-4 rounded-lg mb-4">
              <p className="text-yellow-400 font-semibold text-sm">🏆 Speed Queen Excellence Awards</p>
              <p className="text-xs mt-1">2015 • 2016 • 2017 • 2018 • 2019</p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-white mb-2">Service Areas:</p>
              <p className="text-xs">Manhattan • Brooklyn • Queens<br/>Bronx • Staten Island • Westchester<br/>Long Island</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} TediMatts. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Commercial Laundry Equipment Specialists</p>
          </div>
        </div>
      </div>
    </footer>
  );
}