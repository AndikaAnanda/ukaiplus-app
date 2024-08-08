import { useEffect, useState } from 'react';

const Leaderboard = ({ user = {}, tryoutResult = {}, tryoutResults = [], users = [] }) => {
  const [currentUserRank, setCurrentUserRank] = useState(null);

  // retrieve current user's rank
  useEffect(() => {
    tryoutResults.forEach((result, index) => {
      if (result.user_id === user.user_id) {
        setCurrentUserRank(index + 1);
      }
    });
  }, [tryoutResults, user]);

  return (
    <div className="my-6 bg-white rounded-[16px] p-4 border border-slate-300">
      <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse bg-orange-500 p-4 rounded-md">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-50 truncate">
                {user.full_name || 'Unknown'}
              </p>
              <p className="text-sm text-slate-200 truncate dark:text-gray-400">
                {user.email || 'Unknown'}
              </p>
            </div>
            <div className="font-semibold text-2xl text-slate-50">
              #{currentUserRank || 'N/A'}
            </div>
            <div className="inline-flex text-2xl items-center font-semibold text-slate-50">
              {tryoutResult?.score || '0'}
            </div>
          </div>
        </li>
        {tryoutResults.map((result, index) => {
          if (result.user_id === user.user_id) {
            return null; // Skip rendering if it's the current user's result
          }
          const matchedUser = users.find((u) => u.user_id === result.user_id) || {};
          return (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="User image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {matchedUser.full_name || 'Unknown'}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {matchedUser.email || 'Unknown'}
                  </p>
                </div>
                <div className="font-semibold text-2xl text-slate-900">
                  #{index + 1}
                </div>
                <div className="inline-flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                  {result.score || '0'}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;
