import { Heading, Paragraph } from "@/components/ui/typography";
import { SearchIcon } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function Banner() {
  return (
    <section className="w-full px-6 pb-6 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col min-h-svh sm:min-h-full sm:mt-32 justify-center items-center">
        <div className="w-full text-center">
          <Heading as="h1">
            Smart Learning <br /> Achieving Briliant Achievements
          </Heading>
          <Paragraph className="mt-4 md:text-2xl font-medium">
            Achieve Briliant Achievements with Interactive Quizzes and
            Discussions
          </Paragraph>
        </div>
        <div className="flex flex-col w-full sm:justify-center sm:items-center sm:flex-row mt-14 space-y-3 sm:space-y-0 sm:space-x-3">
          <div className="relative flex justify-center items-center">
            <SearchIcon className="absolute text-gray-600 left-4" />
            <Input
              type="text"
              placeholder="Find your needs"
              className="h-12 sm:w-96 w-full pl-12 outline-none"
            />
          </div>
          <Button type="button" aria-label="search">
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-10 w-full sm:mt-24 mb-24">
        <div className="flex flex-col pb-3">
          <img src="/images/brain.svg" alt="" width={80} height={80} />
          <div className="mt-6">
            <Heading as="h3">Interactive and Engaging</Heading>
            <Paragraph className="mt-2 font-medium text-justify">
              Study with crash quizzes and polls that make learning more fun
            </Paragraph>
          </div>
        </div>
        <div className="md:border-x-2 border-gray-600 flex flex-col md:px-8 pb-3">
          <img src="/images/online-lesson.svg" alt="" width={80} height={80} />
          <div className="mt-6">
            <Heading as="h3">Holistic Learning Experience</Heading>
            <Paragraph className="mt-2 font-medium text-justify">
              An integrated combination of materials, quizzes, and discussions
              provides an engaging learning experience
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col  pb-3">
          <img src="/images/science.svg" alt="" width={80} height={80} />
          <div className="mt-6">
            <Heading as="h3">Easy Access</Heading>
            <Paragraph className="mt-2 font-medium text-justify">
              Materials and features can be accessed anytime and anywhere,
              supporting flexible learning
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
