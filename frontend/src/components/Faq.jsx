import { useState } from "react";
import { FaQuestionCircle, FaCircle} from 'react-icons/fa'
const Faq = () => {
  const [openSection, setOpenSection] = useState(false);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <section id="faq" className="p-8 bg-stone-100">
      <h2 className="text-center font-serif text-4xl text-slate-900 my-4 font-semibold">
        Paling Sering Ditanyakan
      </h2>
      <div className="mt-8" id="accordion-collapse" data-accordion="collapse">
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
              pendaftaran dengan informasi yang diperlukan seperti nama lengkap,
              username, email, dan kata sandi, kemudian klik
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
              Ya, saat ini UKAI Plus memiliki stok soal lebih dari 5000 soal dan
              akan terus bertambah. Materi try-out sudah mencakup 8 topik
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
              rangka meningkatkan kepercayaan pengguna, namun berlaku sementara.
              Oleh karena itu jangan lewatkan try-out gratis UKAI Plus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
