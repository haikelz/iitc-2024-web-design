import { tw } from "@/lib/utils";
import { AccordionProps } from "@/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Heading, Paragraph } from "./typography";

export default function Accordion({ title, icon }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Icon = icon;

  return (
    <div className="flex items-start justify-between w-[784px] max-w-full">
      <div
        className={tw(
          "flex justify-center",
          isOpen ? "items-start" : "items-center"
        )}
      >
        <div className="border-gray-300 rounded-lg border-[1.5px] p-1 mr-5">
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
