import { useState } from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaQuestionCircle,
  FaCircle,
} from 'react-icons/fa';
import logo from './assets/logo-ukaiplus.png';
import assistanceImage from './assets/landing-bg.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [openSection, setOpenSection] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const showLoginForm = () => {
    setIsLogin(true);
  };
  const showRegisterForm = () => {
    setIsLogin(false);
  };

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
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
              className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 my-1 text-center"
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
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white bg-violet-600 rounded md:bg-transparent md:text-orange-500 md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
                  aria-current="page"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-violet-100 md:hover:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
                >
                  Tryout
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-violet-100 md:hover:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-violet-100  md:hover:bg-transparent md:px-4 md:py-2 md:hover:text-violet-600 md:hover:font-bold"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-stone-100 md:pt-12 md:relative md:pb-32">
        <div className='hidden md:flex md:absolute md:inset-0 md:z-0 md:justify-center md:items-end md:ml-32'>
            <img className='h-3/4 object-cover' src={assistanceImage} alt="background" />
        </div>
        <div className='md:relative md:z-10'>
          <div className="md:grid md:grid-cols-2">
            <div className="py-8 mt-16 px-8 mx-auto max-w-screen-xl md:py-0 z-10 relative text-center">
              <div
                href="#"
                className="inline-flex justify-between items-center py-1 px-4 pe-4 mb-7 text-sm text-slate-900 rounded-full border border-slate-900"
              >
                <span className="text-sm font-medium">
                  Welcome to <span className="font-bold">UKAI Plus</span> - Your
                  Tryout Companion
                </span>
              </div>
              <h1 className="mb-4 text-left text-5xl font-semibold font-serif tracking-wide leading-none text-slate-900 md:text-5xl lg:text-6xl">
                Membantu Jalanmu Menuju Apoteker
              </h1>
              <p className="my-8 text-left text-base font-normal text-slate-500 md:text-slate-900 md:mr-32">
                UKAI Plus adalah platform tryout terdepan yang dirancang khusus
                untuk membantu calon apoteker mempersiapkan diri menghadapi Uji
                Kompetensi Apoteker Indonesia (UKAI). Kami menyediakan berbagai
                fitur dan sumber daya yang komprehensif untuk memastikan Anda
                siap menghadapi ujian dengan percaya diri.
              </p>
            </div>
            <div className="flex justify-center md:justify-end md:py-14 md:pr-8">
              <div className="w-full max-w-sm bg-stone-100 border border-slate-200 rounded-md shadow md:w-1/2">
                <div className="flex justify-center mb-4 text-slate-900">
                  <button
                    onClick={showLoginForm}
                    className={`inline-block w-full border-r border-b font-medium rounded-tl-lg text-sm px-4 py-3 text-center ${
                      isLogin
                        ? 'bg-orange-600 hover:bg-orange-800 text-slate-100 font-bold'
                        : 'bg-orange-100 hover:bg-orange-200'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={showRegisterForm}
                    className={`inline-block w-full border-l border-b font-medium rounded-tr-lg text-sm px-4 py-3  text-center ${
                      !isLogin
                        ? 'bg-orange-600 hover:bg-orange-800 text-slate-100 font-bold'
                        : 'bg-orange-100 hover:bg-orange-200'
                    }`}
                  >
                    Register
                  </button>
                </div>
                <div className="w-full"></div>
                <div className="p-4">
                  {isLogin ? (
                    <form className="space-y-6" action="#">
                      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Login
                      </h5>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="youremail@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Kata Sandi
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <label
                            htmlFor="remember"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Ingat Saya
                          </label>
                        </div>
                        <a
                          href="#"
                          className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lupa Kata Sandi?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login
                      </button>
                    </form>
                  ) : (
                    <form className="space-y-6" action="#">
                      <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Register
                      </h5>
                      <div>
                        <label
                          htmlFor="full-name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Andika Ananda"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Dika"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="youremail@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Kata Sandi
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Konfirmasi Kata Sandi
                        </label>
                        <input
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Register
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center bg-stone-100 pt-8 md:hidden">
              <img
                className="w-full h-4/5 object-cover"
                src={assistanceImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-800 py-10 md:flex">
        <div>
          <h2 className="text-center font-serif text-4xl text-slate-100 tracking-wider mb-8 font-semibold md:mx-8 md:my-8 md:text-left md:pr-24">
            Tryout Tersedia
          </h2>
        </div>
        <div className="grid md:flex gap-8 cursor-default md:gap-0">
          <div className="bg-violet-200 border border-slate-200 rounded-md p-8 mx-8 md:p-12 md:w-full md:relative md:-top-20">
            <a
              href="#"
              className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              Available
            </a>
            <h3 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Mini-Tryout - Batch 1
            </h3>
            <p className="text-base font-normal text-slate-500 mb-4">
              Tryout ini dirancang oleh tim UKAI Plus sebagai pendalaman salah
              satu topik farmasi, yaitu Farmakoterapi & Farmasi Klinis. Waktu
              pengerjaan 80 menit dengan total soal sebanyak 80 soal. Tryout
              dibuka pada tanggal 27 - 28 Juli 2024
            </p>
          </div>
          <div className="bg-orange-200 cursor-default border rounded-md p-8 mx-8 md:p-12 md:w-full md:relative md:-top-20">
            <a
              href="#"
              className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              Coming Soon
            </a>
            <h3 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Tryout Komprehensif - Batch 1
            </h3>
            <p className="text-base font-normal text-slate-500 mb-4">
              Tryout Komprehensif adalah tryout yang dirancang oleh tim UKAI
              Plus untuk membantu mendalami seluruh topik farmasi. Waktu
              pengerjaan 200 menit dengan total soal sebanyak 200 soal
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-stone-100">
        <h2 className="text-center font-serif text-4xl text-slate-900 my-4 font-semibold">
          Paling Sering Ditanyakan
        </h2>
        <div className='mt-8' id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:text-violet-500 focus:ring-violet-200 hover:bg-gray-100 gap-3"
              onClick={() => toggleAccordion(1)}
              aria-expanded={openSection === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <FaQuestionCircle className="inline text-base mb-1 mr-1" />
                Bagaimana cara mengakses try-out di UKAI Plus?
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${
                  openSection === 1 ? 'rotate-180' : ''
                } shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${openSection === 1 ? '' : 'hidden'}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-slate-200">
              <p className="mb-2 text-slate-500 text-base dark:text-slate-400">
                Anda dapat mendaftar di UKAI Plus dengan mengklik tombol
                &apos;Daftar Sekarang&apos; di halaman utama. Isi formulir
                pendaftaran dengan informasi yang diperlukan seperti nama
                lengkap, username, email, dan kata sandi, kemudian klik
                &apos;Register&apos;.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-violet-200 focus:text-violet-500 hover:bg-gray-100 gap-3"
              onClick={() => toggleAccordion(2)}
              aria-expanded={openSection === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span>
                <FaQuestionCircle className="inline text-base mb-1 mr-1" />
                Apakah materi yang diberikan cukup?
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${
                  openSection === 2 ? 'rotate-180' : ''
                } shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={`${openSection === 2 ? '' : 'hidden'}`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-b-0 border-slate-200">
              <p className="mb-2 text-slate-500">
                Ya, saat ini UKAI Plus memiliki stok soal lebih dari 5000 soal
                dan akan terus bertambah. Materi try-out sudah mencakup 8 topik
                kefarmasian, yaitu :
              </p>
              <ul className="text-slate-500">
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Farmakoterapi & Farmasi Klinis
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Manajemen & Pelayanan Farmasi
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Regulasi Farmasi
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Teknologi Farmasi
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Biologi Farmasi
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Kimia Farmasi
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Farmasi Herbal
                </li>
                <li>
                  <FaCircle className="inline mb-1 mr-2" />
                  Farmasi Industri
                </li>
              </ul>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full text-left p-5 font-medium rtl:text-right text-slate-500 border border-slate-200 focus:ring-4 focus:ring-violet-200 focus:text-violet-500 hover:bg-slate-100 gap-3"
              onClick={() => toggleAccordion(3)}
              aria-expanded={openSection === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span>
                <FaQuestionCircle className="inline text-base mb-1 mr-1" />
                Apakah ada biaya untuk menggunakan UKAI Plus?
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${
                  openSection === 3 ? 'rotate-180' : ''
                } shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={`${openSection === 3 ? '' : 'hidden'}`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border border-t-0 border-slate-200">
              <p className="mb-2 text-slate-500">
                Kami berkomitmen untuk melindungi privasi dan keamanan data
                pengguna kami. Informasi pribadi Anda akan disimpan dengan aman
                dan hanya digunakan untuk tujuan yang telah dijelaskan dalam
                kebijakan privasi kami.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full text-left p-5 font-medium rtl:text-right text-slate-500 border border-slate-200 focus:ring-4 focus:ring-violet-200 focus:text-violet-500 hover:bg-slate-100 gap-3"
              onClick={() => toggleAccordion(4)}
              aria-expanded={openSection === 4}
              aria-controls="accordion-collapse-body-4"
            >
              <span>
                <FaQuestionCircle className="inline text-base mb-1 mr-1" />
                Apakah data saya aman di UKAI Plus?
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${
                  openSection === 4 ? 'rotate-180' : ''
                } shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className={`${openSection === 4 ? '' : 'hidden'}`}
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border border-t-0 border-slate-200">
              <p className="mb-2 text-slate-500">
                Saat ini UKAI Plus sedang menggratiskan seluruh layanan dalam
                rangka meningkatkan kepercayaan pengguna, namun berlaku
                sementara. Oleh karena itu jangan lewatkan try-out gratis UKAI
                Plus
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-800">
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
    </>
  );
};

export default App;
