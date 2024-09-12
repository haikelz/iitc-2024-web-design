import { tw } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Button from "./ui/Button";
import { Heading, Paragraph } from "./ui/typography";

const featuresList = [
  {
    id: 1,
    title: "Quiz",
    description:
      "Consists of a quick quiz that challenges the speed of thinking and a regular quiz that tests comprehension in depth",
    images: "/images/quiz.svg",
    bgColor: "bg-blue-200",
  },
  {
    id: 2,
    title: "Learning Materials",
    description:
      "Provides educational readings and videos that support a thorough understanding of each topic",
    images: "/images/learning-materials.svg",
    bgColor: "bg-red-200",
  },
  {
    id: 3,
    title: "Discussion Forums",
    description:
      "A space for interaction between users to exchange ideas and understanding related to the material being studied",
    images: "/images/discussion-forums.svg",
    bgColor: "bg-purple-200",
  },
  {
    id: 4,
    title: "Course",
    description:
      "Each course consists of complete learning materials, accompanied by quizzes in each chapter, with a recap of grades at the end",
    images: "/images/course.svg",
    bgColor: "bg-green-200",
  },
  {
    id: 5,
    title: "Reward",
    description:
      "Earn points from flash quizzes and redeem them for exciting rewards according to your achievements",
    images: "/images/reward.svg",
    bgColor: "bg-orange-200",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 w-full bg-lotion">
      <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 justify-between items-center w-full">
        <Heading as="h2" className="xl:w-[700px]">
          We have provided quality material materials that you can easily access{" "}
        </Heading>
        <div className="xl:w-[650px]">
          <Paragraph className="text-justify">
            We provide a variety of quality learning materials that are
            specifically designed to help you understand each topic more deeply.
            From comprehensive readings to interactive videos, all materials are
            easily accessible according to your major and class.
          </Paragraph>
          <Button
            type="button"
            aria-label="explore more"
            className="flex justify-center mt-5 items-center space-x-4"
          >
            <span className="text-base">Explore More</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full grid-rows-1 gap-8 mt-12">
        {featuresList.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 px-7 py-8 rounded-xl"
          >
            <div className="flex justify-center w-fit items-center space-x-4">
              <div className={tw("p-3 rounded-md", item.bgColor)}>
                <img src={item.images} alt={item.title} loading="lazy" />
              </div>
              <Heading as="h3">{item.title}</Heading>
            </div>
            <Paragraph className="mt-3"> {item.description}</Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
}
