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
      <div className="p-4 sm:ml-64 min-h-screen bg-stone-100">
        <div className="mt-14">
            {tryouts.map((tryout) => (
                <Link
                    key={tryout.tryout_id}
                    to={`/dashboard/tryout/${tryout.tryout_id}`}
                    className="block w-full  p-6 my-4 bg-white border border-slate-200 rounded-lg shadow hover:bg-slate-100 "
                >
                    <h5 className="mb-2 text-2xl font-semibold text-slate-900">
                    {tryout.tryout_name}
                    </h5>
                    <p className="font-base text-slate-500 ">
                    {tryout.tryout_type === 'komprehensif' ? '200 Soal, 200 Menit' : '80 Soal, 80 Menit'}
                    </p>
                </Link>
            ))}
        </div>
      </div>
  );
};

export default TryoutsPage;
