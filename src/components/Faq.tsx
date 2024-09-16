import {
  BadgeCheck,
  BrainCog,
  FileClock,
  FileKey2,
  FileText,
  FolderClosed,
  GraduationCap,
  MonitorCog,
  Trophy,
} from "lucide-react";
import Accordion from "./ui/Accordion";
import { Heading, Paragraph } from "./ui/typography";

export default function Faq() {
  return (
    <section id="faq" className="flex justify-center px-6 py-20">
      <div className="flex flex-col">
        <div className="text-center">
          <Heading as="h2">Frequently Asked Question</Heading>
          <Paragraph className="mt-1">
            Quick answers to questions you may here
          </Paragraph>
        </div>
        <div className="space-y-2 mt-10">
          <Accordion icon={GraduationCap} title="What is EduVerse?" />
          <Accordion icon={MonitorCog} title="Who can use this platform?" />
          <Accordion icon={FileClock} title="What is a Flash Quiz?" />
          <Accordion
            icon={BrainCog}
            title="What are the learning materials available?"
          />
          <Accordion
            icon={FileKey2}
            title="Can the materials on EduVerse be accessed at any time?"
          />
          <Accordion
            icon={FolderClosed}
            title="What are the features on the Eduverse website?"
          />
          <Accordion
            icon={FileClock}
            title="How do I take a course at EduVerse?"
          />
          <Accordion
            icon={FileText}
            title="How do I view my report card online?"
          />
          <Accordion
            icon={Trophy}
            title="Is there a reward system on this platform?"
          />
          <Accordion
            icon={Trophy}
            title="Is there a reward system on this platform?"
          />
          <Accordion icon={BadgeCheck} title="Is the platform free?" />
        </div>
      </div>
    </section>
  );
}
