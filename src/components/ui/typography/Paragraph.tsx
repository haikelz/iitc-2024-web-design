import { tw } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p
      className={tw(
        "text-base font-normal leading-[1.75] tracking-wide",
        "md:leading-[1.7777778]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
