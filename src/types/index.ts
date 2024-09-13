import { LucideIcon } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as: "h1" | "h2" | "h3" | "h4";
};

export type ParagraphProps = ChildrenProps &
  HTMLAttributes<HTMLParagraphElement>;

export type AccordionProps = {
  title: string;
  icon: LucideIcon;
};
