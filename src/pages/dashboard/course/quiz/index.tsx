import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function QuizCourse() {
  return (
    <>
      <div className="flex min-h-screen">
        <aside className="w-[400px] h-full bg-white fixed top-0 left-0 border-r">
          <div className="p-6 flex justify-between items-center min-h-full flex-col">
            <div className="min-h-full w-full">
              <div className="flex justify-end flex-col space-y-4 border-b">
                <Heading as="h3" className="text-2xl text-end font-bold mb-8">
                  07m:15s
                </Heading>
              </div>
              <ul className="flex flex-col mt-8 w-full space-y-6 items-center">
                <li className="flex gap-3">
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    1
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    2
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    3
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    4
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    5
                  </Button>
                </li>
                <li className="flex gap-3">
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    1
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    2
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    3
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    4
                  </Button>
                  <Button className="rounded-md bg-[#d1d5db] text-black">
                    5
                  </Button>
                </li>
                <li className="flex gap-3">
                  <Button className="rounded-md bg-white text-black border-2">
                    1
                  </Button>
                  <Button className="rounded-md bg-white text-black border-2">
                    2
                  </Button>
                  <Button className="rounded-md bg-white text-black border-2">
                    3
                  </Button>
                  <Button className="rounded-md bg-white text-black border-2">
                    4
                  </Button>
                  <Button className="rounded-md bg-white text-black border-2">
                    5
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <main className="ml-[400px] w-full p-6 space-y-5">
          <section className="w-full flex justify-between items-center">
            <div className="space-y-4 border-b w-full">
              <Heading as="h3" className="text-2xl font-bold mb-8">
                Quantities and Units
              </Heading>
            </div>
          </section>
          <section className="space-y-3">
            <div className="flex flex-row items-center space-x-3">
              <Paragraph className="font-bold">16.</Paragraph>
              <Paragraph className="flex-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                corporis alias non rem soluta excepturi quaerat atque
                voluptates, cum suscipit! Reprehenderit saepe praesentium
                maxime, temporibus amet fuga ipsa nobis alias laudantium earum?
              </Paragraph>
            </div>
            <div className="flex flex-col space-y-2 ml-10">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  className="mr-2 h-6 w-6"
                />
                <label htmlFor="option1" className="text-lg">
                  Option 1
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  className="mr-2 h-6 w-6"
                />
                <label htmlFor="option2" className="text-lg">
                  Option 2
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  className="mr-2 h-6 w-6"
                />
                <label htmlFor="option3" className="text-lg">
                  Option 3
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="options"
                  id="option4"
                  className="mr-2 h-6 w-6"
                />
                <label htmlFor="option4" className="text-lg">
                  Option 4
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="options"
                  id="option5"
                  className="mr-2 h-6 w-6"
                />
                <label htmlFor="option5" className="text-lg">
                  Option 5
                </label>
              </div>
            </div>
          </section>
          <section className="flex justify-between pt-20">
            <div className="flex items-center gap-2">
              <CircleChevronLeft />
              <Paragraph className="font-bold">Previous</Paragraph>
            </div>
            <a href="/dashboard/course/quiz/score" className="flex items-center gap-2">
              <Paragraph className="font-bold">Next</Paragraph>
              <CircleChevronRight />
            </a>
          </section>
        </main>
      </div>
    </>
  );
}
