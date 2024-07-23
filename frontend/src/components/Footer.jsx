import logo from '../assets/logo-ukaiplus.png'
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id='kontak' className="bg-zinc-800">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="">
            <div className="border-b border-slate-100 px-5 py-5 flex justify-center md:justify-start">
              <a href="https://ukaiplus.com/" className="flex items-center">
                <img src={logo} className="h-24 me-3" alt="UkaiPlus Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 pl-5">
              <div className="border-r border-slate-100 py-4 md:px-4 md:py-8">
                <h2 className="mb-6 text-lg font-semibold text-slate-100 uppercase">
                  Menu
                </h2>
                <ul className="text-slate-500 font-medium space-y-1">
                  <li className="">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tryout
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div className="py-4 md:px-4 md:py-8">
                <h2 className="mb-6 text-lg font-semibold text-slate-100 uppercase">
                  Kontak
                </h2>
                <ul className="text-slate-500 font-medium space-y-1">
                  <li className="">
                    <FaWhatsapp className="inline mr-1 text-lg" />
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      +62895 0000 0000
                    </a>
                  </li>
                  <li>
                    <FaEnvelope className="inline mr-1 text-lg" />
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      kelvindwi75@gmail.com
                    </a>
                  </li>
                  <li>
                    <FaInstagram className="inline mr-1 text-lg" />
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      @ukaiplus
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-gray-200 sm:mx-auto" />
          <div className="sm:flex sm:items-center sm:justify-between p-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{' '}
              <a href="https://ukaiplus.com/" className="hover:underline">
                UKAI Plus™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
  )
}

export default Footer