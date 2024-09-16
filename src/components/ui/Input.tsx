import { tw } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={tw(
        "border-2 text-xl placeholder:text-gray-700 font-medium border-metallicBlue rounded-full",
        className
      )}
      {...props}
    />
  );
}
