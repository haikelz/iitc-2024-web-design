import { ChildrenProps } from "@/types";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

export default function Layout({ children }: ChildrenProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait" initial={false}>
        <m.main
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          {children}
        </m.main>
      </AnimatePresence>
    </LazyMotion>
  );
}
