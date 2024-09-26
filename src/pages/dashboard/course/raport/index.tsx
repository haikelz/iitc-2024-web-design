export default function Raport() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold mb-8">Result</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-10">
        <h2 className="text-2xl font-semibold mb-6">Test</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">
              Atomic Model History Quiz
            </span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">
              Excellent
            </span>
            <span className="text-teal-500 font-semibold text-lg">90%</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">Bohr Atomic Model Quiz</span>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
              Fair
            </span>
            <span className="text-yellow-500 font-semibold text-lg">65%</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">
              Electron Configuration Quiz
            </span>
            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
              Poor
            </span>
            <span className="text-red-500 font-semibold text-lg">57%</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">
              Final Atomic Structure Test
            </span>
            <span className="bg-teal-500 text-white px-3 py-1 rounded text-sm">
              Excellent
            </span>
            <span className="text-teal-500 font-semibold text-lg">92%</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 text-lg">
          Back to course
        </button>
      </div>
    </div>
  );
}
