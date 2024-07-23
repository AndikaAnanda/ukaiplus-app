const Tryout = () => {
  return (
    <section id='tryout' className="bg-zinc-800 py-10 md:flex">
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
            <p className="text-base font-normal text-slate-900 mb-4">
              Tryout ini dirancang oleh tim UKAI Plus sebagai pendalaman salah
              satu topik farmasi, yaitu Farmakoterapi & Farmasi Klinis. Waktu
              pengerjaan 80 menit dengan total soal sebanyak 80 soal. Tryout
              dibuka pada tanggal 27 - 28 Juli 2024
            </p>
          </div>
          <div className="bg-orange-200 cursor-default border rounded-md p-8 mx-8 md:p-12 md:w-full md:relative md:-top-20">
            <a
              href="#"
              className="bg-red-200 text-slate-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
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
            <p className="text-base font-normal text-slate-900 mb-4">
              Tryout Komprehensif adalah tryout yang dirancang oleh tim UKAI
              Plus untuk membantu mendalami seluruh topik farmasi. Waktu
              pengerjaan 200 menit dengan total soal sebanyak 200 soal
            </p>
          </div>
        </div>
      </section>
  )
}

export default Tryout