import { Heading } from "./ui/typography";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full fixed top-0 left-0 border-r-2">
      <div className="p-6 flex flex-1 flex-col">
        <Heading as="h3" className="text-2xl text-center font-bold mb-4">
          EduVerse
        </Heading>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Material
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Quiz
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Course
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Discussion
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Reward
            </a>
          </li>
        </ul>
        <div className="p-6">
          <button
            className="w-full rounded-lg mt-5 bg-blue-500 text-white hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </div>
    </aside>
  );
}
