import { Heading, Paragraph } from "./ui/typography";

export default function About() {
  return (
    <section id="about" className="w-full space-y-20 px-8 py-24">
      <div className="flex justify-between items-center w-full">
        <img src="/images/startup.svg" alt="startup" draggable="false" />
        <div className="w-[65%]">
          <Heading as="h2">
            Building the Future with Interactive and Quality Education
          </Heading>
          <Paragraph className="mt-4">
            Welcome to eduKel, a learning platform specifically designed to help
            high school students achieve their best achievements. We understand
            the challenges students face in understanding the subject matter,
            preparing for exams, and developing essential skills.
          </Paragraph>
        </div>
      </div>
      <div className="flex justify-between items-start w-full gap-10">
        <div className="mt-5 w-[65%]">
          <Heading as="h2">
            Creating a Smart Young Generation Through Digital Education
          </Heading>
          <Paragraph className="mt-4">
            Our focus is on providing a complete learning experience, with
            features such as quick quizzes to hone your comprehension,
            structured reading materials and videos, and discussion forums to
            share knowledge with fellow students.
          </Paragraph>
        </div>
        <img src="/images/hand.svg" alt="hand" draggable="false" />
      </div>
    </section>
  );
}
