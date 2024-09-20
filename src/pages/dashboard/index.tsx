import Sidebar from "@/components/Sidebar";
import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 w-full p-6 space-y-10">
        <section className="w-full flex justify-between items-center">
          <div>
            <Heading as="h3" className="text-2xl font-bold mb-2">
              Hi, Verstappen!
            </Heading>
            <Paragraph>Monday, September 09, 2024</Paragraph>
          </div>
          <img src="/images/ryo.svg" loading="lazy" alt="profile" />
        </section>
        <section className="bg-darkSlateGray rounded-2xl pt-6 px-10 w-full">
          <div className="flex justify-between items-start h-full w-full">
            <div className="h-full flex flex-col w-full justify-between items-start">
              <Paragraph className="text-[28px] leading-relaxed font-bold text-white">
                Have you tried the new exercises added to our learning materials
                this week?
              </Paragraph>
              <Button className="bg-white mt-6 px-7 py-3">
                <Paragraph className="text-xl font-bold">
                  Start Learning
                </Paragraph>
              </Button>
            </div>
            <img
              src="/images/exercise.svg"
              loading="lazy"
              alt="exercise"
              className="h-full"
            />
          </div>
        </section>
        <section className="w-full">
          <Heading as="h2" className="!text-[28px] leading-relaxed">
            My Progress
          </Heading>
          <div className="grid grid-cols-3 grid-rows-1 w-full"></div>
        </section>
      </main>
    </div>
  );
}
