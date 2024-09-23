import DashboardLayout from "@/components/DashboardLayout";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Heading, Paragraph } from "@/components/ui/typography";
import { tw } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export const PhysicsList = [
  {
    id: 1,
    name: "Quantities and Units",
    level: "Grade 11",
    totalQuestions: 211,
    bgGrade: "bg-viridianGreen",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-pineGreen",
  },
  {
    id: 2,
    name: "Measurement",
    level: "Grade 11",
    totalQuestions: 22,
    bgGrade: "bg-[#B74757]",
    images: "/images/economic-principles-bg.png",
    bgColor: "bg-smokyTopaz",
  },
  {
    id: 3,
    name: "Theory of Relativity",
    level: "Grade 11",
    totalQuestions: 126,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
  {
    id: 4,
    name: "Newton's Law",
    level: "Grade 11",
    totalQuestions: 657,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
  {
    id: 5,
    name: "Laws of Thermodynamics",
    level: "Grade 11",
    totalQuestions: 43,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
  {
    id: 6,
    name: "Fluid Mechanics",
    level: "Grade 11",
    totalQuestions: 112,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
];

export default function Material() {
  return (
    <DashboardLayout>
      <section>
        <div className="flex justify-between items-center">
          <Heading as="h4">Categories</Heading>
          <div className="relative flex justify-center items-center">
            <SearchIcon className="absolute text-gray-600 left-3" />
            <Input
              type="text"
              placeholder="Find the materials you need"
              className="sm:w-96 w-full py-2 bg-white border rounded-lg border-gray-300 pl-12 outline-none"
            />
            <div className="absolute text-sm right-3 rounded-md py-1 px-2 bg-gray-200">
              <Paragraph className="text-xs font-bold">Search</Paragraph>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-5">
          <div className="relative inline-block w-40">
            <select className="block appearance-none w-full bg-white border border-gray-300 font-bold placeholder:text-gray-700 py-2 px-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <Button className="rounded-lg">All</Button>
              <Button className="rounded-lg">Nature Science</Button>
              <Button className="rounded-lg">Social Science</Button>
              <Button className="rounded-lg">Language</Button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <Button>All</Button>
            <Button>Biology</Button>
            <Button>Chemistry</Button>
            <Button>Physics</Button>
            <Button>Mathematics</Button>
            <Button>Religious Education</Button>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-8 mt-4 grid-rows-1 w-full">
        {PhysicsList.map((item) => (
          <div className={tw("rounded-2xl w-full", item.bgColor)}>
            <img
              loading="lazy"
              src={item.images}
              className="w-full"
              alt={item.name}
            />
            <div className="w-full p-4 space-y-1 mt-4">
              <div className="flex w-full justify-between items-center">
                <Paragraph className="text-white font-bold">
                  {item.name}
                </Paragraph>
                <button
                  className={tw("px-3 rounded-full py-1.5", item.bgGrade)}
                >
                  <Paragraph className="text-xs text-white font-bold">
                    {item.level}
                  </Paragraph>
                </button>
              </div>
              <Paragraph className="text-white">
                {item.totalQuestions} Students
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
