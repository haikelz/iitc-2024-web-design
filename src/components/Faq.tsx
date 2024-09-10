import { Heading, Paragraph } from "./ui/typography";

export default function Faq() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col">
        <div className="text-center">
          <Heading as="h2">Frequently Asked Question</Heading>
          <Paragraph>Quick answers to questions you may here</Paragraph>
        </div>
        <div className="mt-7">
          <Heading as="h4">What is EduVerse?</Heading>
        </div>
        <div className="mt-7">
          <Heading as="h4">Who can use this platform?</Heading>
        </div>
        <div className="mt-7">
          <Heading as="h4">What is a Flash Quiz?</Heading>
        </div>
        <div className="mt-7">
          <Heading as="h4">What are the learning materials available?</Heading>
        </div>
      </div>
    </section>
  );
}
