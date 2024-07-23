import { useState } from 'react';
import logo from '../assets/logo-ukaiplus.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-stone-100 border-gray-20 font-sans z-50 fixed top-0 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 shadow-md">
        <a
          href="https://ukaiplus.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="Ukaiplus Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-violet-600 hover:bg-violet-800 transition ease-in-out delay-150 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 my-1 text-center"
          >
            Daftar Sekarang
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 my-1"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col text-sm font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-stone-100 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#beranda"
                className="block py-2 px-3 md:p-0 text-slate-900 hover:bg-violet-100 rounded md:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tryout"
                className="block py-2 px-3 md:p-0 text-slate-900 rounded hover:bg-violet-100 md:hover:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
              >
                Tryout
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 px-3 md:p-0 text-slate-900 rounded hover:bg-violet-100 md:hover:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="block py-2 px-3 md:p-0 text-slate-900 rounded hover:bg-violet-100  md:hover:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
