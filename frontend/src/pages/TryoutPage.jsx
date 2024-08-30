import { FaCheckDouble, FaPause, FaClock } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa6';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';
import logo from '../assets/logo-ukaiplus.png';
import { useEffect, useState } from 'react';

const TryoutPage = () => {
  const [showQuestionsNumber, setShowQuestionsNumber] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const toogleShowQuestionsNumber = () => {
    setShowQuestionsNumber(!showQuestionsNumber);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          alert('Waktu habis!');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // clean interval after being unmounted
    return () => clearInterval(timer);
  }, []);

  // convert seconds to hh:mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaClock className="inline text-lg mb-1 me-2" />
                    {formatTime(timeLeft)}
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaCheckDouble className="inline me-2 mb-1" />
                    Selesai
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaPause className="inline text-lg mb-1" />
                  </a>
                </div>
              </div>
              <button
                onClick={toogleShowQuestionsNumber}
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View questions number</span>
                <BsGrid3X3GapFill className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex items-start space-x-4 p-4">
        {/* question */}
        <div className="flex p-4 border border-slate-300 shadow rounded-lg">
          <div>
            <div className="flex justify-between mb-8">
              <div>
                <h1 className="text-xl font-medium text-slate-900">1/200</h1>
                <p className="text-sm text-slate-500">
                  Farmakoterapi & Farmasi Klinis
                </p>
              </div>
              <div className="flex items-center space-x-4 text-xl text-slate-500">
                <MdArrowCircleLeft className="cursor-pointer" />
                <MdArrowCircleRight className="cursor-pointer" />
                <FaFlag className="cursor-pointer" />
              </div>
            </div>
            <p className="text-slate-900 font-medium mb-4">
              Pasien laki-laki 36 tahun, menderita penyakit infeksi jamur kulit.
              Pasien meminta rekomendasi obat ke apoteker tanpa resep obat
              dokter. Obat apa yg tepat untuk pengobatan tsb?
            </p>
            <div className="space-y-4">
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-1"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  A. Salep hidrokortison
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-2"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  B. Salep ketokonazol
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-3"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-3"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  C. Salep gentamisin
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-4"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-4"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  D. Salep kloramfenikol
                </label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded-lg hover:bg-slate-800">
                <input
                  checked
                  id="bordered-radio-5"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="bordered-radio-5"
                  className="w-full py-4 ms-2 text-sm text-gray-900 hover:text-white"
                >
                  E. Salep asiklovir
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-white p-4 w-1/2 border border-slate-300 shadow rounded-lg h-screen overflow-y-auto ${
            showQuestionsNumber ? '' : 'hidden'
          }`}
        >
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 200 }).map((_, index) => (
              <button
                key={index}
                className="bg-white border border-slate-300 rounded shadow-sm font-medium hover:bg-slate-900 hover:text-white"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TryoutPage;
