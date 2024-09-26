import Button from "@/components/ui/Button";
import { Heading, Paragraph } from "@/components/ui/typography";

export default function Score() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 gap-40">
        <div className="flex flex-col text-center">
          <Heading as="h2">Rank</Heading>
          <Heading as="h1">7/50</Heading>
        </div>
        <div className="flex flex-col text-center">
          <Heading as="h2">Score</Heading>
          <Heading as="h1">16/20</Heading>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Paragraph>
          Congratulations on successfully completing the quiz
        </Paragraph>
        <a href="/dashboard/quiz/newtons-law" className="w-full">
          <Button className="w-full rounded-lg">Do it Again</Button>
        </a>
        <a
          href="/dashboard/quiz/leaderboard"
          className="flex justify-center rounded-md bg-metallicBlue text-xl px-6 py-2 text-white font-bold"
        >
          Leaderboard
        </a>
      </div>
    </main>
  );
}
