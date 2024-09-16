// import { tw } from "@/lib/utils";
// import { AccordionProps } from "@/types";
// import { ChevronDown } from "lucide-react";
// import { useState } from "react";
// import { Heading, Paragraph } from "./typography";

// export default function Accordion({ title, icon }: AccordionProps) {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const Icon = icon;

//   return (
//     <div className="flex items-start justify-between lg:w-[784px] max-w-full cursor-pointer">
//       <div
//         className={tw(
//           "flex justify-center",
//           isOpen ? "items-start" : "items-center"
//         )}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="border-gray-300 rounded-lg border-[1.5px] p-1 mr-5">
//           <Icon />
//         </div>
//         <div>
//           <Heading as="h4">{title}</Heading>
//           {isOpen ? (
//             <Paragraph className="mt-4 text-justify">
//               EduVerse is an online learning platform designed for high school
//               students. We offer learning materials in the form of readings,
//               videos, and interactive quizzes to help students understand each
//               topic.
//             </Paragraph>
//           ) : null}
//         </div>
//       </div>
//       {/* <button
//         type="button"
//         aria-label="open"
//         onClick={() => setIsOpen(!isOpen)}
//       > */}
//         <ChevronDown />
//       {/* </button> */}
//     </div>
//   );
// }

import { tw } from "@/lib/utils";
import { AccordionProps } from "@/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Heading, Paragraph } from "./typography";

export default function Accordion({ title, icon }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Icon = icon;

  return (
    <div className="flex flex-col lg:w-[784px] max-w-full rounded-lg border-b-2">
      <div
        className={tw(
          "flex items-center justify-between p-4 cursor-pointer",
          isOpen ? "bg-gray-100" : "bg-white"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="border-gray-300 rounded-lg border-[1.5px] p-1 mr-5">
            <Icon />
          </div>
          <Heading as="h4">{title}</Heading>
        </div>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="p-4">
          <Paragraph className="text-justify">
            EduVerse is an online learning platform designed for high school
            students. We offer learning materials in the form of readings,
            videos, and interactive quizzes to help students understand each
            topic.
          </Paragraph>
        </div>
      )}
    </div>
  );
}
