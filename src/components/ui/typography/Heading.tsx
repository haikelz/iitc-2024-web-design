import { tw } from "@/lib/utils";
import { HeadingProps } from "@/types";

export function Heading({ as, children, className }: HeadingProps) {
  return (
    <>
      {as === "h1" ? (
        <h1
          className={tw(
            "scroll-m-20 md:text-[64px] text-5xl leading-snug font-bold tracking-wide",
            className
          )}
        >
          {children}
        </h1>
      ) : as === "h2" ? (
        <h2
          className={tw(
            "scroll-m-20 text-4xl md:text-[52px] leading-snug font-bold tracking-wide",
            className
          )}
        >
          {children}
        </h2>
      ) : as === "h3" ? (
        <h3
          className={tw(
            "scroll-m-20 text-2xl leading-snug font-bold tracking-wide",
            className
          )}
        >
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4
          className={tw(
            "scroll-m-20 text-xl leading-snug font-bold tracking-wide",
            className
          )}
        >
          {children}
        </h4>
      ) : null}
    </>
  );
}
