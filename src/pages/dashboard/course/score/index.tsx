import { Heading, Paragraph } from "@/components/ui/typography";

export default function QuizCourseScore() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col text-center">
        <Heading as="h2">Score</Heading>
        <Heading as="h1">16/20</Heading>
      </div>
      <div className="flex flex-col gap-5">
        <Paragraph>
          Congratulations on successfully completing the quiz
        </Paragraph>
        <a
          href="/dashboard/course/quiz"
          className="flex justify-center rounded-md bg-metallicBlue text-xl px-6 py-2 text-white font-bold"
        >
          Do it again
        </a>
        <a
          href="/dashboard/course/quiz/raport"
          className="flex justify-center rounded-md bg-metallicBlue text-xl px-6 py-2 text-white font-bold"
        >
          See all result
        </a>
      </div>
    </main>
  );
}
