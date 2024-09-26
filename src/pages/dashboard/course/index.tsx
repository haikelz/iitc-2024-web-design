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
    route: "/dashboard/course/quantities-and-units",
    level: "Grade 11",
    totalQuestions: 211,
    bgGrade: "bg-viridianGreen",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-pineGreen",
  },
  {
    id: 2,
    name: "Measurement",
    route: "/dashboard/course/measurement",
    level: "Grade 11",
    totalQuestions: 22,
    bgGrade: "bg-[#B74757]",
    images: "/images/economic-principles-bg.png",
    bgColor: "bg-smokyTopaz",
  },
  {
    id: 3,
    name: "Theory of Relativity",
    route: "/dashboard/course/theory-of-relativity",
    level: "Grade 11",
    totalQuestions: 126,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
  {
    id: 4,
    name: "Newton's Law",
    route: "/dashboard/course/newton%27s-law",
    level: "Grade 11",
    totalQuestions: 657,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
  {
    id: 5,
    name: "Laws of Thermodynamics",
    route: "/dashboard/course/laws-of-thermodynamics",
    level: "Grade 11",
    totalQuestions: 43,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
  {
    id: 6,
    name: "Fluid Mechanics",
    route: "/dashboard/course/fluid-mechanics",
    level: "Grade 11",
    totalQuestions: 112,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
];

export default function Course() {
  return (
    <DashboardLayout>
      <section>
        <div className="flex justify-between items-center">
          <Heading as="h3">Categories</Heading>
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
              <Button className="rounded-lg bg-white border border-gray-300 flex justify-center items-center space-x-3">
                <img src="/images/Category.svg" alt="" />
                <Paragraph className="font-bold">All</Paragraph>
              </Button>
              <Button className="rounded-lg bg-white border border-gray-300 flex justify-center items-center space-x-3">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.68 0C12.4441 0 11.44 1.00406 11.44 2.24C11.44 2.64906 11.5625 3.02969 11.755 3.36H7.52005C7.21161 3.36 6.96005 3.61156 6.96005 3.92V5.6C6.96005 5.90844 7.21161 6.16 7.52005 6.16H16.48C16.7907 6.16 17.04 5.90844 17.04 5.6V3.92C17.04 3.61156 16.7907 3.36 16.48 3.36H15.605C15.7975 3.02969 15.92 2.64906 15.92 2.24C15.92 1.00406 14.916 0 13.68 0ZM13.68 1.12C14.2969 1.12 14.8 1.62313 14.8 2.24C14.8 2.85688 14.2969 3.36 13.68 3.36C13.0632 3.36 12.56 2.85688 12.56 2.24C12.56 1.62313 13.0632 1.12 13.68 1.12ZM8.08005 6.72V11.1475C8.0013 11.5063 6.94036 13.0769 5.99755 14.455C3.15599 18.6112 0.800049 22.2228 0.800049 24.255C0.800049 27.2234 3.94567 28 5.61255 28H18.3875C20.0544 28 23.2 27.2234 23.2 24.255C23.2 22.2228 20.8441 18.6112 18.0025 14.455C17.0597 13.0769 15.9966 11.515 15.92 11.2V6.72H14.8V11.2C14.8 11.7075 15.3513 12.5628 17.075 15.085C17.2063 15.2753 17.3397 15.4766 17.4775 15.68H6.50505C6.64286 15.4788 6.7938 15.2753 6.92505 15.085C8.6488 12.5628 9.20005 11.7075 9.20005 11.2V6.72H8.08005ZM12 7.84C10.7641 7.84 9.76005 8.84406 9.76005 10.08C9.76005 11.3159 10.7641 12.32 12 12.32C13.236 12.32 14.24 11.3159 14.24 10.08C14.24 8.84406 13.236 7.84 12 7.84ZM12 8.96C12.6169 8.96 13.12 9.46313 13.12 10.08C13.12 10.6969 12.6169 11.2 12 11.2C11.3832 11.2 10.88 10.6969 10.88 10.08C10.88 9.46313 11.3832 8.96 12 8.96ZM9.20005 18.48C10.1275 18.48 10.88 19.2325 10.88 20.16C10.88 21.0875 10.1275 21.84 9.20005 21.84C8.27255 21.84 7.52005 21.0875 7.52005 20.16C7.52005 19.2325 8.27255 18.48 9.20005 18.48ZM15.36 20.72C16.5982 20.72 17.6 21.7219 17.6 22.96C17.6 24.1981 16.5982 25.2 15.36 25.2C14.1219 25.2 13.12 24.1981 13.12 22.96C13.12 21.7219 14.1219 20.72 15.36 20.72Z"
                    fill="#374151"
                  />
                </svg>

                <Paragraph className="font-bold">Nature Science</Paragraph>
              </Button>
              <Button className="rounded-lg bg-white border border-gray-300 flex justify-center items-center space-x-3">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53333 0.599976C5.502 0.599976 4.66667 1.43531 4.66667 2.46664V5.26664C4.66667 6.29798 5.502 7.13331 6.53333 7.13331H8.86667L11.2 9.46664L13.5333 7.13331H15.8667C16.898 7.13331 17.7333 6.29798 17.7333 5.26664V2.46664C17.7333 1.43531 16.898 0.599976 15.8667 0.599976H6.53333ZM5.6 9.0018C3.33853 9.0018 1.50391 10.3629 1.50391 12.8008C1.50391 13.8312 2.08359 14.6346 2.08359 14.6346C2.08359 14.6346 1.81927 14.7621 1.81927 15.3127C1.81927 16.3823 2.50651 16.638 2.50651 16.638C2.58024 17.2876 3.3684 18.1641 3.73333 18.5393V19.5893C2.86347 20.9193 0.8904 20.69 0 23H11.2C10.3096 20.69 8.33653 20.9184 7.46667 19.5893V18.5411C7.8316 18.1659 8.61976 17.2885 8.69349 16.6398C8.69349 16.6398 9.38073 16.1648 9.38073 15.3146C9.38073 14.7247 9.11641 14.6346 9.11641 14.6346C9.11641 14.6346 9.59036 13.7378 9.59036 12.881C9.59036 11.1636 8.72833 9.84216 7.28073 9.84216C7.28073 9.84216 6.66493 9.0018 5.6 9.0018ZM16.8 9.0018C14.5385 9.0018 12.7039 10.3629 12.7039 12.8008C12.7039 13.8312 13.2836 14.6346 13.2836 14.6346C13.2836 14.6346 13.0193 14.7621 13.0193 15.3127C13.0193 16.3823 13.7065 16.638 13.7065 16.638C13.7802 17.2876 14.5684 18.1641 14.9333 18.5393V19.5893C14.3677 20.4536 13.3365 20.6618 12.4396 21.3338C12.6225 21.6288 12.7953 21.9503 12.9409 22.3273L13.2016 23H22.4C21.5096 20.69 19.5365 20.9184 18.6667 19.5893V18.5411C19.0316 18.1659 19.8198 17.2885 19.8935 16.6398C19.8935 16.6398 20.5807 16.1648 20.5807 15.3146C20.5807 14.7247 20.3164 14.6346 20.3164 14.6346C20.3164 14.6346 20.7904 13.7378 20.7904 12.881C20.7904 11.1636 19.9283 9.84216 18.4807 9.84216C18.4807 9.84216 17.8649 9.0018 16.8 9.0018Z"
                    fill="#374151"
                  />
                </svg>
                <Paragraph className="font-bold">Social Science</Paragraph>
              </Button>
              <Button className="rounded-lg bg-white border border-gray-300 flex justify-center items-center space-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66672 0.666626C1.63538 0.666626 0.800049 1.50196 0.800049 2.53329V16.5333C0.800049 17.5646 1.63538 18.4 2.66672 18.4H6.40005V22.1333C6.40005 22.3808 6.49838 22.6182 6.67342 22.7933C6.84845 22.9683 7.08585 23.0666 7.33338 23.0666C7.48896 23.0663 7.64199 23.0272 7.77857 22.9527C7.91515 22.8782 8.03094 22.7707 8.11541 22.6401L11.3 18.4H21.3334C22.3647 18.4 23.2 17.5646 23.2 16.5333V2.53329C23.2 1.50196 22.3647 0.666626 21.3334 0.666626H2.66672ZM6.40005 3.46663C6.77338 3.46663 7.11211 3.68826 7.25864 4.03173L10.0586 10.5651C10.2621 11.0383 10.0415 11.5884 9.56828 11.7919C9.44881 11.8442 9.32325 11.8666 9.20005 11.8666C8.83792 11.8666 8.49266 11.6553 8.34145 11.3015L8.18468 10.9333H4.61541L4.45864 11.3015C4.25611 11.7757 3.70409 11.9972 3.23182 11.7919C2.75862 11.5884 2.53799 11.0392 2.74146 10.5669L5.54146 4.03355C5.68799 3.68915 6.02672 3.46663 6.40005 3.46663ZM17.6 6.26845C18.1152 6.26845 18.5334 6.68565 18.5334 7.20178V8.13512H20.4C20.9152 8.13512 21.3334 8.55232 21.3334 9.06845C21.3334 9.58458 20.9152 9.99996 20.4 9.99996H20.298C20.1029 10.9697 19.6307 12.104 18.9326 13.0989L20.0264 13.9192C20.4389 14.2282 20.523 14.8147 20.2141 15.2263C20.0312 15.4717 19.7486 15.5981 19.4649 15.5981C19.2708 15.5981 19.0751 15.5382 18.9071 15.4122L17.6711 14.4862C16.861 15.1582 15.8948 15.6 14.8 15.6C14.2848 15.6 13.8667 15.1828 13.8667 14.6666C13.8667 14.1505 14.2848 13.7333 14.8 13.7333C15.2686 13.7333 15.7102 13.5752 16.118 13.3213L15.1737 12.614C14.7612 12.3051 14.6771 11.7186 14.986 11.307C15.2959 10.8945 15.8805 10.8131 16.293 11.1211L17.456 11.9924C17.8938 11.3577 18.2167 10.642 18.3894 10.0018H14.8C14.2848 10.0018 13.8667 9.58458 13.8667 9.06845C13.8667 8.55232 14.2848 8.13512 14.8 8.13512H16.6667V7.20178C16.6667 6.68565 17.0848 6.26845 17.6 6.26845ZM6.40005 6.76975L5.41567 9.06663H7.38442L6.40005 6.76975Z"
                    fill="#374151"
                  />
                </svg>
                <Paragraph className="font-bold">Language</Paragraph>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <Button className="border border-gray-300 flex justify-center items-center space-x-3 bg-white">
              <img src="/images/Category.svg" alt="" />
              <Paragraph className="font-bold">All</Paragraph>
            </Button>
            <Button className="border border-gray-300 flex justify-center items-center space-x-3 bg-white">
              <img src="/images/icons8-biology.svg" alt="" />
              <Paragraph className="font-bold">Biology</Paragraph>
            </Button>
            <Button className="border border-gray-300 flex justify-center items-center space-x-3 bg-white">
              <img src="/images/icons8-chemistry.svg" alt="" />
              <Paragraph className="font-bold">Chemistry</Paragraph>
            </Button>
            <Button className="border border-gray-300 flex justify-center items-center space-x-3 bg-white">
              <img src="/images/icons8-physics.svg" alt="" />
              <Paragraph className="font-bold">Physics</Paragraph>
            </Button>
            <Button className="border border-gray-300 flex justify-center items-center space-x-3 bg-white">
              <img src="/images/icons8-mathematics.svg" alt="" />
              <Paragraph className="font-bold">Mathematics</Paragraph>
            </Button>
            <Button className="border border-gray-300 flex justify-center items-center space-x-3 bg-white">
              <img src="/images/religion.png" alt="" className="w-6 h-6" />
              <Paragraph className="font-bold">Religious Education</Paragraph>
            </Button>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-8 mt-4 grid-rows-1 w-full">
        {PhysicsList.map((item) => (
          <a href={item.route} className={tw("rounded-2xl w-full", item.bgColor)}>
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
                {item.totalQuestions} Questions
              </Paragraph>
            </div>
          </a>
        ))}
      </div>
    </DashboardLayout>
  );
}
