import {
  BadgePercent,
  BookKey,
  BrainCog,
  ChevronDown,
  FileCheck2,
  FileClock,
  FileText,
  FolderClosed,
  GraduationCap,
  MonitorCog,
  Trophy,
} from "lucide-react";
import { Heading, Paragraph } from "./ui/typography";

export default function Faq() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col">
        <div className="text-center mb-3">
          <Heading as="h2">Frequently Asked Question</Heading>
          <Paragraph>Quick answers to questions you may here</Paragraph>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <GraduationCap className="mr-5" />
            <Heading as="h4">What is EduVerse?</Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <MonitorCog className="mr-5" />
            <Heading as="h4">Who can use this platform?</Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <FileClock className="mr-5" />
            <Heading as="h4">What is a Flash Quiz?</Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <BrainCog className="mr-5" />
            <Heading as="h4">
              What are the learning materials available?
            </Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <BookKey className="mr-5" />
            <Heading as="h4">
              Can the materials on EduVerse be accessed at any time?
            </Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <FolderClosed className="mr-5" />
            <Heading as="h4">
              What are the features on the Eduverse website?
            </Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <FileCheck2 className="mr-5" />
            <Heading as="h4">How do I take a course at EduVerse?</Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <Trophy className="mr-5" />
            <Heading as="h4">
              Is there a reward system on this platform?
            </Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <FileText className="mr-5" />
            <Heading as="h4">How do I view my report card online?</Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
        <div className="mt-5 flex justify-between border-b-2">
          <div className="flex">
            <BadgePercent className="mr-5" />
            <Heading as="h4">Is the platform free?</Heading>
          </div>
          <div>
            <ChevronDown />
          </div>
        </div>
      </div>
    </section>
  );
}
