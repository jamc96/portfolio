"use client";
import { motion } from "framer-motion";
import { ScrollProgress } from "../magicui/scroll-progress";
export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "container sticky inset-x-0 top-0 z-50 flex w-full items-center justify-between border-b border-background bg-background/75 pt-4 backdrop-blur-lg tablet:pt-4"
      }
    >
      <ScrollProgress />
      {children}
    </motion.header>
  );
}
