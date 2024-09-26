import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function Test() {
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
              <div className="grid grid-cols-5 mt-6 gap-4 grid-rows-1 w-full">
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
              </div>
            </div>
          </div>
        </aside>
        <main className="ml-[400px] w-full p-6 space-y-5">
          <section className="w-full flex justify-between items-center">
            <div className="space-y-4 border-b w-full">
              <Heading as="h3" className="text-2xl font-bold mb-8">
                Newton's Law
              </Heading>
            </div>
          </section>
          <section className="space-y-3">
            <div className="flex flex-row items-center space-x-3">
              <Paragraph className="font-bold">16.</Paragraph>
              <Paragraph className="flex-1">
                A box with a mass of 5 kg is on a flat surface without friction.
                A horizontal force of 20 N is applied to the box. Based on
                Newton's Second Law, what is the acceleration that a box
                undergoes?
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
            <a href="/dashboard/quiz/score" className="flex items-center gap-2">
              <Paragraph className="font-bold">Next</Paragraph>
              <CircleChevronRight />
            </a>
          </section>
        </main>
      </div>
    </>
  );
}
