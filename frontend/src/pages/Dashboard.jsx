import TryoutTable from '../components/TryoutTable'
import PieChart from '../components/PieChart'
import { FaUsers, FaCheck, FaFlagCheckered } from 'react-icons/fa';
const Dashboard = () => {
  
  return (
    <>
      <div className="p-4 sm:ml-64 bg-stone-100">
        <div className="mt-14">
          <h1 className="text-slate-900 text-2xl font-semibold font-sans ">
            Dashboard
          </h1>
          <p className="text-slate-500 text-base">
            Ringkasan ujian tryout, peserta, dan lainnya
          </p>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
            <div className="flex flex-row justify-left cursor-default p-4 my-4 gap-8 bg-white border border-slate-300 rounded-[16px]">
              <div className="flex items-center">
                <div className="border border-slate-300 rounded-full bg-gradient-to-b from-slate-200 to-slate-50">
                  <div className="border bg-white border-slate-300 m-2 rounded-full p-4">
                    <FaUsers className="text-3xl text-violet-600" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="font-sans text-slate-500 font-medium">
                  Peserta Tryout
                </p>
                <h5 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">
                  999
                </h5>
              </div>
            </div>

            <div className="flex flex-row justify-left cursor-default p-4 my-4 gap-8 bg-white border border-slate-300 rounded-[16px]">
              <div className="flex items-center">
                <div className="border border-slate-300 rounded-full bg-gradient-to-b from-slate-200 to-slate-50">
                  <div className="border bg-white border-slate-300 m-2 rounded-full p-4">
                    <FaCheck className="text-3xl text-violet-600" />
                  </div>
                </div>
                
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="font-sans text-slate-500 font-medium">
                  Tryout Diselesaikan
                </p>
                <h5 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">
                  2/3
                </h5>
              </div>
            </div>

            <div className="flex flex-row justify-left cursor-default p-4 my-4 gap-8 bg-white border border-slate-300 rounded-[16px]">
              <div className="flex items-center">
                <div className="border border-slate-300 rounded-full bg-gradient-to-b from-slate-200 to-slate-50">
                  <div className="border bg-white border-slate-300 m-2 rounded-full p-4">
                    <FaFlagCheckered className="text-3xl text-violet-600" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="font-sans text-slate-500 font-medium">
                  Nilai Rata-Rata
                </p>
                <h5 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">
                  92.5%
                </h5>
              </div>
            </div>
          </div>
          <h1 className='text-slate-900 text-2xl font-semibold font-sans'>Persentase Persebaran Topik</h1>
          <p className="text-slate-500 text-base">
            Dari seluruh soal yang tersedia, terdapat 8 topik dengan persentase persebaran yang berbeda-beda. (Akan terus berubah)
          </p>
          <div className='border border-gray-300 rounded-[16px] my-6'>
            {/* Deactivate strict mode to solve multiple rendering issue */}
          <PieChart/>
          </div>
          <h1 className='text-slate-900 text-2xl font-semibold font-sans'>Riwayat Tryout</h1>
          <p className="text-slate-500 text-base">
            Pantau perkembanganmu dengan melihat riwayat tryout
          </p>
          <div className='py-4'>
            <TryoutTable/>
          </div>
        </div>        
      </div>
    </>
  );
};

export default Dashboard;
