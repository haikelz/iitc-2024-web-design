import DashboardLayout from "@/components/DashboardLayout";
import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";
import { tw } from "@/lib/utils";

export const progressList = [
  {
    id: 1,
    name: "Atomic Structure",
    grade: 11,
    bgGrade: "bg-viridianGreen",
    progress: "75%",
    images: "/images/science.svg",
    bgColor: "bg-pineGreen",
  },
  {
    id: 2,
    name: "Ancient World Civilizations",
    grade: 12,
    bgGrade: "bg-[#B74757]",
    progress: "100%",
    images: "/images/man.svg",
    bgColor: "bg-smokyTopaz",
  },
  {
    id: 3,
    name: "Simple Past Tense",
    grade: 10,
    bgGrade: "bg-[#2E6B9B]",
    progress: "25%",
    images: "/images/languages.svg",
    bgColor: "bg-metallicBlue",
  },
];

export const popularQuizList = [
  {
    id: 1,
    name: "Argumentative Text",
    level: "Easy",
    totalQuestions: 30,
    bgGrade: "bg-viridianGreen",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-pineGreen",
  },
  {
    id: 2,
    name: "Economic Principles",
    level: "Hard",
    totalQuestions: 20,
    bgGrade: "bg-[#B74757]",
    images: "/images/economic-principles-bg.png",
    bgColor: "bg-smokyTopaz",
  },
  {
    id: 3,
    name: "Atomic Structure",
    level: "Easy",
    totalQuestions: 30,
    bgGrade: "bg-[#2E6B9B]",
    images: "/images/argumentative-text-bg.png",
    bgColor: "bg-metallicBlue",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
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
        <div className="grid grid-cols-3 gap-8 mt-4 grid-rows-1 w-full">
          {progressList.map((item) => (
            <div className={tw("rounded-2xl p-4", item.bgColor)}>
              <div className="flex justify-between w-full items-start">
                <div className="rounded-full flex justify-center items-center bg-waterSpout h-10 w-10">
                  <img
                    loading="lazy"
                    src={item.images}
                    className="h-6 w-6"
                    alt="science"
                  />
                </div>
                <button className="rounded-lg text-center px-4 py-1 bg-white">
                  <Paragraph className="leading-none -translate-y-1">
                    ...
                  </Paragraph>
                </button>
              </div>
              <div className="w-full mt-10 space-y-4">
                <div>
                  <div className="flex w-full justify-between items-center">
                    <Paragraph className="text-white font-bold">
                      {item.name}
                    </Paragraph>
                    <button
                      className={tw("px-3 rounded-full py-1.5", item.bgGrade)}
                    >
                      <Paragraph className="text-xs text-white font-bold">
                        Grade {item.grade}
                      </Paragraph>
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-2 bg-white rounded-full">
                  <div
                    style={{ width: item.progress }}
                    className={tw(
                      "absolute left-0 top-0 z-50 h-2 rounded-l-full bg-chineseYellow",
                      item.progress === "100%" ? "rounded-r-full" : ""
                    )}
                  ></div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <Paragraph className="text-white">Progress</Paragraph>
                  <Paragraph className="text-white font-bold">
                    {item.progress}
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full">
        <Heading as="h2" className="!text-[28px] leading-relaxed">
          Top Popular Quiz
        </Heading>
        <div className="grid grid-cols-3 gap-8 mt-4 grid-rows-1 w-full">
          {popularQuizList.map((item) => (
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
                  {item.totalQuestions} Questions
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
