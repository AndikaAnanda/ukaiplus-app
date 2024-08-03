import { FaEllipsisH } from 'react-icons/fa';

const TryoutTable = ({ resultData, tryoutData }) => {
  // Lookup object for tryout data
  const tryoutLookup = tryoutData.reduce((acc, tryout) => {
    acc[tryout.tryout_id] = tryout;
    return acc;
  }, {});

  console.log('result: ', resultData)
  console.log('tryout: ', tryoutData)

  return (
    <div className="relative overflow-x-auto rounded-[16px] bg-white border border-slate-300 p-2">
      <table className="w-full text-sm font-sans text-left rtl:text-right rounded-[16px] overflow-hidden text-slate-500 dark:text-slate-400">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tryout
            </th>
            <th scope="col" className="px-6 py-3">
              Jenis
            </th>
            <th scope="col" className="px-6 py-3">
              Waktu Tryout
            </th>
            <th scope="col" className="px-6 py-3">
              Durasi Submit
            </th>
            <th scope="col" className="px-6 py-3">
              Nilai
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((d) => {
            const t = tryoutLookup[d.tryout_id] || {}
            const timestamps = d.updatedAt
            const date = new Date(timestamps)
            const formattedDate = `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getFullYear()}`
            return (
            <tr
              key={d.result_id}
              className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                {t.tryout_name}
              </th>
              <td className="px-6 py-4">{t.tryout_type}</td>
              <td className="px-6 py-4">{formattedDate}</td>
              <td className="px-6 py-4">{d.time_elapsed}</td>
              <td className="px-6 py-4">{d.score}</td>
              <td className="px-6 py-4 flex justify-end">
                <a
                  href="#"
                  className="text-slate-900 border py-1 border-slate-300 p-2 rounded hover:bg-slate-200"
                >
                  <FaEllipsisH className="text-lg" />
                </a>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
};

export default TryoutTable;
