import { Book, Home, User } from "lucide-react";
import { Heading, Paragraph } from "./ui/typography";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white fixed top-0 left-0 border-r-2">
      <div className="p-6 flex justify-between items-center min-h-full flex-col">
        <div className="min-h-full w-full">
          <Heading as="h3" className="text-2xl text-center font-bold mb-4">
            EduVerse
          </Heading>
          <ul className="flex flex-col justify-start items-start w-full space-y-3">
            <li className=" w-full">
              <button
                type="button"
                className="flex rounded-md justify-start bg-[#F4F4F4] border border-gray-300 px-3 py-1.5 space-x-3 items-center w-full"
              >
                <Home />
                <Paragraph className="text-xl font-bold">Dashboard</Paragraph>
              </button>
            </li>
            <li className=" w-full">
              <button
                type="button"
                className="flex rounded-md justify-start bg-[#F4F4F4] border border-gray-300 px-3 py-1.5 space-x-3 items-center w-full"
              >
                <Book />
                <Paragraph className="text-xl font-bold">Material</Paragraph>
              </button>
            </li>
            <li className=" w-full">
              <button
                type="button"
                className="flex rounded-md justify-start bg-[#F4F4F4] border border-gray-300 px-3 py-1.5 space-x-3 items-center w-full"
              >
                <Home />
                <Paragraph className="text-xl font-bold">Quiz</Paragraph>
              </button>
            </li>
            <li className=" w-full">
              <button
                type="button"
                className="flex rounded-md justify-start bg-[#F4F4F4] border border-gray-300 px-3 py-1.5 space-x-3 items-center w-full"
              >
                <Home />
                <Paragraph className="text-xl font-bold">Course</Paragraph>
              </button>
            </li>
            <li className=" w-full">
              <button
                type="button"
                className="flex rounded-md justify-start bg-[#F4F4F4] border border-gray-300 px-3 py-1.5 space-x-3 items-center w-full"
              >
                <Home />
                <Paragraph className="text-xl font-bold">Discussion</Paragraph>
              </button>
            </li>
            <li className=" w-full">
              <button
                type="button"
                className="flex rounded-md justify-start bg-[#F4F4F4] border border-gray-300 px-3 py-1.5 space-x-3 items-center w-full"
              >
                <Home />
                <Paragraph className="text-xl font-bold">Reward</Paragraph>
              </button>
            </li>
          </ul>
        </div>
        <div className="border-2 w-full">
          <button
            type="button"
            className="flex justify-start items-center space-x-3 px-3 py-1.5"
          >
            <User />
            <Paragraph className="text-xl font-bold">Profile</Paragraph>
          </button>
          <button type="button">
            <Paragraph className="text-xl font-bold">Logout</Paragraph>
          </button>
        </div>
      </div>
    </aside>
  );
}
