"use client";
import { motion } from "framer-motion";
export default function AnimateEntrance({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
