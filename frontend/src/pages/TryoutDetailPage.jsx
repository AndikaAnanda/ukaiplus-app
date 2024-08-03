import Leaderboard from '../components/Leaderboard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const TryoutDetailPage = () => {
  const { tryoutId } = useParams();
  const [tryout, setTryout] = useState({});
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [tryoutResult, setTryoutResult] = useState([]);
  const [tryoutResults, setTryoutResults] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchTryout = async () => {
      try {
        const res = await fetch(`/api/tryout/${tryoutId}`);
        const data = await res.json();
        setTryout(data.tryout[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTryout();
  }, [tryoutId]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user');
        const data = await res.json();
        if(res.ok){
          setUsers(data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/user/me', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchresult = async () => {
      try {
        const res = await fetch('/api/result/me', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        if (res.ok) {
          const result = (data.result).find(r => r.tryout_id == tryoutId)
          setTryoutResult(result)
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchresult();
  }, [tryoutId]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch('/api/result');
        const data = await res.json();
        if (res.ok) {
          const results = (data.result).filter(r => r.tryout_id == tryoutId)
          // sort result descending
          const sortedResults = results.sort((a, b) => b.score - a.score)
          setTryoutResults(sortedResults)
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [tryoutId]);

  return (
    <div className="p-4 sm:ml-64 bg-stone-100">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <h1 className="text-2xl font-semibold font-sans mt-14">
            {tryout.tryout_name}
          </h1>
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="block cursor-default p-6 my-4 bg-white border border-slate-300 rounded-[16px]">
              <h5 className="mb-2 font-medium text-slate-500">Tipe</h5>
              <p className="font-medium text-lg text-end text-slate-900">
                {tryout.tryout_type === 'komprehensif'
                  ? 'Komprehensif'
                  : 'Mini-Tryout'}
              </p>
            </div>

            <div className="block cursor-default p-6 my-4 bg-white border border-slate-300 rounded-[16px]">
              <h5 className="mb-2 font-medium text-slate-500">Soal</h5>
              <p className="font-medium text-lg text-end text-slate-900">
                {tryout.tryout_type === 'komprehensif' ? 200 : 80}
              </p>
            </div>

            <div className="block cursor-default p-6 md:my-4 bg-white border border-slate-300 rounded-[16px]">
              <h5 className="mb-2 font-medium text-slate-500">Waktu</h5>
              <p className="font-medium text-lg text-end text-slate-900">
                {tryout.tryout_type === 'komprehensif' ? 200 : 80} menit
              </p>
            </div>

            <div className="block cursor-default p-6 md:my-4 bg-white border border-slate-300 rounded-[16px]">
              <h5 className="mb-2 font-medium text-slate-500">Topik</h5>
              <p className="font-medium text-lg text- text-end text-slate-900">
                {tryout.tryout_type === 'komprehensif'
                  ? 'Semua Topik'
                  : 'Farmakoterapi & Farmasi Klinis'}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-4 mt-4 ">
            <p className="text-slate-500 text-base">
              Kamu belum mengerjakan Tryout ini
            </p>
            <button
              type="button"
              className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-md text-sm px-5 py-2.5"
            >
              KERJAKAN
            </button>
          </div>

          <div>
            <h1 className="text-2xl font-semibold font-sans mt-4">
              Leaderboard
            </h1>
            <p className="text-base text-slate-500 font-sans">
              Pantau perkembanganmu diantara para peserta Tryout
            </p>
            <Leaderboard
              user={user}
              users={users}
              tryoutResult={tryoutResult}
              tryoutResults={tryoutResults}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TryoutDetailPage;
