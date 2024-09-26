import { Heading, Paragraph } from "@/components/ui/typography";
import { CircleChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const courseList = [
  {
    id: 1,
    name: "History of Quantities and Units",
    route: "/dashboard/material",
    progres: "Complete",
  },
  {
    id: 2,
    name: "Model of Quantities",
    route: "/dashboard/quiz",
    progres: "Complete",
  },
  {
    id: 3,
    name: "Model of Units",
    route: "/dashboard/course",
    progres: "Complete",
  },
  {
    id: 4,
    name: "Quantities and Units Configuration",
    route: "/dashboard/discussion",
    progres: "Complete",
  },
  {
    id: 5,
    name: "Final Test",
    route: "/dashboard/reward",
    progres: "Incomplete",
  },
];

export default function CourseMaterial() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <aside className="w-[400px] h-full bg-white fixed top-0 left-0 border-r">
          <div className="p-6 mt-20 flex justify-between items-center min-h-full flex-col">
            <div className="min-h-full w-full">
              <ul className="flex flex-col justify-start items-start w-full space-y-3">
                {courseList.map((item) => (
                  <li key={item.id} className="w-full">
                    <Link
                      to={item.route}
                      className="flex rounded-md justify-start px-3 py-2 flex-col w-full bg-[#F4F4F4] border border-gray-300"
                    >
                      <Paragraph className="text-xl font-bold">
                        {item.name}
                      </Paragraph>
                      <div>
                        <span
                          className={`text-base font-bold px-2 py-1 rounded-md text-white ${
                            item.progres === "Complete"
                              ? "bg-green-300"
                              : "bg-gray-500"
                          }`}
                        >
                          {item.progres}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex flex-col w-full ml-[400px]">
          <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-10 p-4 flex justify-between items-center">
            <a href="/dashboard/course">
              <Heading
                as="h3"
                className="text-2xl flex items-center font-bold ml-5"
              >
                <CircleChevronLeft className="mr-3" size={32} />
                Quantities and Units
              </Heading>
            </a>
          </nav>

          <main className="mt-20 p-6 flex flex-col justify-between h-full">
            <section className="space-y-10 flex-grow">
              <div className="flex flex-col space-y-3">
                <Heading as="h4">Final Atomic Structure Test</Heading>
                <Paragraph className="flex-1">
                  This Final Exam is designed to evaluate your understanding of
                  all the material that has been studied during this course.
                </Paragraph>
                <Paragraph>
                  The exam consists of 40 questions and has several conditions:
                </Paragraph>
                <Paragraph className="ml-5">
                  <ul className="list-disc">
                    <li>Graduation requirements: 30 correct questions </li>
                    <li>Processing time: 60 minutes</li>
                  </ul>
                </Paragraph>
                <Paragraph>
                  If you don't meet the graduation criteria, wait for 30 minutes
                  before you can try again. While waiting, use the opportunity
                  to deepen the material.
                </Paragraph>
                <Paragraph>Good luck and keep the spirits up!</Paragraph>
              </div>
            </section>

            <section className="mt-auto">
              <div className="flex justify-between pt-20">
                <div className="flex items-center gap-2">
                  <CircleChevronLeft />
                  <Paragraph className="font-bold">Previous</Paragraph>
                </div>
                <a
                  href="/dashboard/course/quiz"
                  className="flex justify-center rounded-md bg-metallicBlue text-xl px-6 py-2 text-white font-bold"
                >
                  Start
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
