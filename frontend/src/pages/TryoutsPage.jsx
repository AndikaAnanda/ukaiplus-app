import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TryoutsPage = () => {
    const [tryouts, setTryouts] = useState([])

    useEffect(() => {
        const fetchTryouts = async () => {
            try {
                const res = await fetch('/api/tryout')
                const data = await res.json()
                setTryouts(data.tryout)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTryouts()
    }, [])
  return (
    <>
      <div className="p-4 sm:ml-64 bg-white">
        <div className="mt-14">
            {tryouts.map((tryout) => (
                <Link
                    key={tryout.tryout_id}
                    to={`/dashboard/tryout/${tryout.tryout_id}`}
                    className="block w-full  p-6 my-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tryout.tryout_name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    80 Soal, 80 Menit
                    </p>
                </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default TryoutsPage;
