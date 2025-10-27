import { FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0b0f19] text-gray-300 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">About BBC News</h2>
          <p className="text-sm leading-relaxed">
            Your trusted source for breaking news, insightful analysis, and
            global coverage powered by real-time data.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Follow Us</h2>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
        <p>© {currentYear} NewsPortal. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Powered by NewsAPI</p>
      </div>
    </footer>
  );
}
