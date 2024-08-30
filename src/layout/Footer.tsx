import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container mx-auto px-4">
        {/* Sosial media links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="text-gray-600 hover:text-blue-500">
            <FaFacebookF className="text-2xl" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-gray-600 hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link
            href="https://telegram.org"
            target="_blank"
            className="text-gray-600 hover:text-blue-400">
            <FaTelegramPlane className="text-2xl" />
          </Link>
        </div>

        {/* Footer navigatsiya */}
        <div className="text-center mb-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 text-sm">
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 text-sm">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 text-sm">
                Aloqa
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 text-sm">
                Shartlar
              </Link>
            </li>
          </ul>
        </div>

        {/* Copywrite */}
        <div className="text-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Alif Shop. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
