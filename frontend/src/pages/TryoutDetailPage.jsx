import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TryoutDetailPage = () => {
  const { tryoutId } = useParams();
  const [tryout, setTryout] = useState({});

  useEffect(() => {
    const fetchTryout = async () => {
      try {
        const res = await fetch(`/api/tryout/${tryoutId}`);
        const data = await res.json();
        setTryout(data.tryout[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTryout();
  }, [tryoutId]);

  return (
    <>
      <div className="p-4 sm:ml-64 bg-white">
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="block cursor-default p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tipe
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {tryout.tryout_type === 'komprehensif' ? 'Komprehensif' : 'Mini-Tryout'}
            </p>
          </div>

          <div
            className="block cursor-default p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Soal
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {tryout.tryout_type === 'komprehensif' ? 200: 80} soal
            </p>
          </div>

          <div
            className="block cursor-default p-6 md:my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Waktu
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {tryout.tryout_type === 'komprehensif' ? 200: 80} menit
            </p>
          </div>

          <div
            className="block cursor-default p-6 md:my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Topik
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {tryout.tryout_type === 'komprehensif' ? 'Semua topik' : 'Farmakoterapi & Farmasi Klinis'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryoutDetailPage;
