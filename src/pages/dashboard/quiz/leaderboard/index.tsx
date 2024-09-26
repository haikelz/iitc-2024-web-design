export default function Leaderboard() {
  const data = [
    { id: 1, name: 'John Doe', score: '95%' },
    { id: 2, name: 'Jane Smith', score: '92%' },
    { id: 3, name: 'Nicholas', score: '90%' },
    { id: 4, name: 'Steven', score: '90%' },
    { id: 5, name: 'Frederick', score: '87%' },
    { id: 6, name: 'Vettel', score: '82%' },
    { id: 7, name: 'Raikkonen', score: '80%' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white border border-gray-200 rounded-md shadow-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600 font-extrabold text-xl">
              <th className="py-3 px-2 text-center w-16">Rank</th>
              <th className="py-3 px-4 text-left w-96">Name</th>
              <th className="py-3 px-2 text-left w-16">Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 font-semibold text-lg`}>
                <td className="border-t border-gray-200 py-3 px-2 text-center">{user.id}</td>
                <td className="border-t border-gray-200 py-3 px-4">{user.name}</td>
                <td className="border-t border-gray-200 py-3 px-2 text-center">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          <a
            href="/dashboard/quiz"
            className="rounded-md bg-metallicBlue text-xl px-6 py-2 text-white font-bold"
          >
            Find other quiz
          </a>
        </div>
      </div>
    </div>
  );
}
