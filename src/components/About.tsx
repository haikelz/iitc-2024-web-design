import { Heading, Paragraph } from "./ui/typography";

export default function About() {
  return (
    <section id="about" className="w-full space-y-10 px-6 py-20">
      <div className="flex flex-col xl:flex-row justify-center xl:space-x-20 items-center w-full">
        <img
          src="/images/startup.svg"
          alt="startup"
          draggable="false"
          className="hidden xl:block xl:w-72 xl:h-72"
        />
        <div className="xl:w-[65%]">
          <Heading as="h2">
            Building the Future with Interactive and Quality Education
          </Heading>
          <Paragraph className="text-justify mt-4">
            Welcome to EduVerse, a learning platform specifically designed to
            help high school students achieve their best achievements. We
            understand the challenges students face in understanding the subject
            matter, preparing for exams, and developing essential skills.
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:space-x-20 justify-center items-center w-full">
        <div className="xl:w-[65%]">
          <Heading as="h2">
            Creating a Smart Young Generation Through Digital Education
          </Heading>
          <Paragraph className="mt-4 text-justify">
            Our focus is on providing a complete learning experience, with
            features such as quick quizzes to hone your comprehension,
            structured reading materials and videos, and discussion forums to
            share knowledge with fellow students.
          </Paragraph>
        </div>
        <img
          src="/images/hand.svg"
          alt="hand"
          draggable="false"
          className="hidden xl:block xl:w-72 xl:h-72"
        />
      </div>
    </section>
  );
}
