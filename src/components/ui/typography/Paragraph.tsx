import { tw } from "@/lib/utils";
import { ParagraphProps } from "@/types";

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p
      className={tw("text-xl font-medium leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}
