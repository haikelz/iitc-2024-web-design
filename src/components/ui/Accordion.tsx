import { ChevronDown, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Heading, Paragraph } from "./typography";

type AccordionProps = {
  title: string;
  icon: LucideIcon;
};

export default function Accordion({ title, icon }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Icon = icon;

  return (
    <div className="flex items-start justify-between w-[784px] max-w-full">
      <div className="flex justify-center items-start">
        <div className="border-gray-300 rounded-md border-2 p-1 mr-5">
          <Icon />
        </div>
        <div>
          <Heading as="h4">{title}</Heading>
          {isOpen ? (
            <Paragraph className="mt-4">
              EduVerse is an online learning platform designed for high school
              students. We offer learning materials in the form of readings,
              videos, and interactive quizzes to help students understand each
              topic.
            </Paragraph>
          ) : null}
        </div>
      </div>
      <button
        type="button"
        aria-label="open"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronDown />
      </button>
    </div>
  );
}
