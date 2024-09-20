import { tw } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={tw(
        "bg-metallicBlue text-xl px-6 py-2 text-white font-bold rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
